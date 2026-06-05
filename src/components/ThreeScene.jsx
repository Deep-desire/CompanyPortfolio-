import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform vec3 uMouse;
  attribute float size;
  varying vec3 vColor;
  varying float vDistance;

  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i); 
    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vec3 pos = position;
    
    // Add organic noise movement
    float noiseFreq = 1.2;
    float noiseAmp = 0.6;
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.2, pos.y * noiseFreq + uTime * 0.2, pos.z * noiseFreq);
    pos.x += snoise(noisePos) * noiseAmp;
    pos.y += snoise(noisePos + vec3(10.0)) * noiseAmp;
    pos.z += snoise(noisePos + vec3(20.0)) * noiseAmp;

    // Mouse interaction (repel)
    float dist = distance(pos, uMouse);
    float force = max(0.0, 2.5 - dist) * 0.8;
    vec3 dir = normalize(pos - uMouse);
    pos += dir * force;
    
    vDistance = dist;
    
    // Color gradient based on position and time
    vec3 colorA = vec3(0.02, 0.71, 0.83); // cyan
    vec3 colorB = vec3(0.55, 0.36, 0.96); // purple
    vec3 colorC = vec3(0.2, 0.5, 0.9);    // blue
    
    float mixVal = sin(pos.x + pos.y + uTime * 0.5) * 0.5 + 0.5;
    vColor = mix(mix(colorA, colorC, mixVal), colorB, pos.z * 0.5 + 0.5);
    
    // Calculate final size
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * (20.0 / -mvPosition.z) * (1.0 + force * 1.5);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vDistance;

  void main() {
    // Make points circular and soft
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float ll = length(xy);
    if(ll > 0.5) discard;
    
    // Soft edge
    float alpha = smoothstep(0.5, 0.1, ll);
    
    // Highlight points near mouse
    float highlight = max(0.0, 1.0 - (vDistance * 0.4));
    vec3 finalColor = vColor + vec3(highlight * 0.6); // add white glow
    
    gl_FragColor = vec4(finalColor, alpha * 0.85);
  }
`;

// Seeded PRNG for purity rules
const seededRandom = (seed) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const InteractiveParticles = ({ count = 6000 }) => {
  const meshRef = useRef();
  const { viewport } = useThree();
  
  // Generate particles in a spherical distribution
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const random = seededRandom(42);
    
    for (let i = 0; i < count; i++) {
      // Math for a sphere distribution
      const theta = random() * 2 * Math.PI;
      const phi = Math.acos((random() * 2) - 1);
      const radius = 2.5 + (random() - 0.5) * 0.5;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = random() * 2.0 + 0.5;
    }
    
    return [positions, sizes];
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(0, 0, 0) },
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Update time uniform
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Update mouse uniform based on viewport intersection
      // Map pointer to 3D space loosely
      const targetX = (state.pointer.x * viewport.width) / 2;
      const targetY = (state.pointer.y * viewport.height) / 2;
      
      // Lerp mouse for smoothness
      meshRef.current.material.uniforms.uMouse.value.lerp(
        new THREE.Vector3(targetX, targetY, 0),
        0.1
      );

      // Add gentle rotation to the whole system
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        transparent={true}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen dark:mix-blend-normal">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <InteractiveParticles count={8000} />
        {window.innerWidth > 768 && (
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2 + 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
          />
        )}
      </Canvas>
    </div>
  );
}
