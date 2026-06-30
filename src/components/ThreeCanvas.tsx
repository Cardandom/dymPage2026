import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Cloud } from '@react-three/drei';
import * as THREE from 'three';

function MilkyWay({ position, color, scale = 1, rotation = [0, 0, 0] }: { position: [number, number, number], color: string, scale?: number, rotation?: [number, number, number] }) {
  const points = React.useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
        // Core density
        const isCore = Math.random() > 0.8;
        const angle = i * 0.05;
        const radius = isCore ? Math.random() * 0.1 : i * 0.0015;
        const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.3;
        const y = (Math.random() - 0.5) * (isCore ? 0.2 : 0.05);
        const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.3;
        p[i * 3] = x;
        p[i * 3 + 1] = y;
        p[i * 3 + 2] = z;
    }
    return p;
  }, []);

  const ref = React.useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={ref} position={position} scale={scale} rotation={rotation}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

function Nebula({ position, color, scale = [1, 1, 1] }: { position: [number, number, number], color: string, scale?: [number, number, number] }) {
    return (
        <group position={position} scale={scale}>
            <Cloud
                opacity={0.08}
                speed={0.4}
                segments={20}
                color={color}
                fade={10}
            />
        </group>
    );
}

function SpiralGalaxy({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const points = React.useMemo(() => {
    const p = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const angle = i * 0.1;
      const radius = i * 0.005;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.2;
      const y = (Math.random() - 0.5) * 0.1;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.2;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, []);

  const ref = React.useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <points ref={ref} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color={color} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Comets() {
  const cometRefs = React.useRef<THREE.Group[]>([]);
  
  useFrame((state) => {
    cometRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.position.x += 0.1;
        ref.position.y -= 0.05;
        if (ref.position.x > 10) {
          ref.position.x = -15 - Math.random() * 10;
          ref.position.y = 5 + Math.random() * 5;
        }
      }
    });
  });

  return (
    <group>
      {[...Array(3)].map((_, i) => (
        <group 
          key={i} 
          ref={(el) => (cometRefs.current[i] = el!)}
          position={[-10 - i * 5, 5 + i * 2, -5]}
        >
          <mesh>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#00f2ff" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0, 0.02, 2, 8]} />
            <meshBasicMaterial color="#00f2ff" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function AnimatedBackground() {
  const points = React.useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, []);

  const ref = React.useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.3} />
      </points>
      
      <Comets />
      
      <MilkyWay position={[3, 1, -8]} color="#ffffff" scale={4} rotation={[Math.PI / 4, 0, 0]} />
      <Nebula position={[-5, -2, -12]} color="#7000ff" scale={[2, 1, 1]} />
      <Nebula position={[6, -4, -15]} color="#00f2ff" scale={[3, 1.5, 1]} />
      
      <SpiralGalaxy position={[5, 4, -10]} color="#7000ff" scale={2} />
      <SpiralGalaxy position={[-8, -6, -15]} color="#00f2ff" scale={3} />
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />
        <AnimatedBackground />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
    </div>
  );
}
