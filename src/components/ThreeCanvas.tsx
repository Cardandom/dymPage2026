'use client';

import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Cloud } from '@react-three/drei';
import * as THREE from 'three';

type PlanetProps = {
  position: [number, number, number];
  scale: number;
  color: string;
  emissive: string;
  detailColor: string;
  roughness: number;
  metalness: number;
  clearcoat: number;
  iridescence: number;
  emissiveIntensity?: number;
  atmosphereOpacity?: number;
  detailOpacity?: number;
  reflectivity?: number;
  rotationSpeed?: number;
  ring?: {
    color: string;
    rotation: [number, number, number];
    count: number;
    seed: number;
    innerRadius?: number;
    outerRadius?: number;
    particleSize?: number;
  };
};

type ParticleRingProps = {
  color: string;
  rotation: [number, number, number];
  count: number;
  seed: number;
  innerRadius?: number;
  outerRadius?: number;
  particleSize?: number;
};

type ThreeCanvasProps = {
  maxDpr?: number;
  presentation?: 'standalone' | 'overlay';
};

type SceneAssetErrorBoundaryProps = {
  children: React.ReactNode;
};

type SceneAssetErrorBoundaryState = {
  hasError: boolean;
};

class SceneAssetErrorBoundary extends React.Component<
  SceneAssetErrorBoundaryProps,
  SceneAssetErrorBoundaryState
> {
  state: SceneAssetErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneAssetErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[DYM Digital] La textura de nubes no pudo cargarse.', error);
    }
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

function ParticleRing({
  color,
  rotation,
  count,
  seed,
  innerRadius = 1.22,
  outerRadius = 1.78,
  particleSize = 0.018,
}: ParticleRingProps) {
  const ringRef = React.useRef<THREE.Points>(null);

  const { positions, colors } = React.useMemo(() => {
    const pointPositions = new Float32Array(count * 3);
    const pointColors = new Float32Array(count * 3);
    const baseColor = new THREE.Color(color);
    const highlightColor = new THREE.Color('#ffffff');
    const particleColor = new THREE.Color();
    let randomSeed = seed;

    const random = () => {
      randomSeed += 0x6d2b79f5;
      let value = randomSeed;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };

    for (let i = 0; i < count; i++) {
      const angle = random() * Math.PI * 2;
      const radius = Math.sqrt(
        innerRadius ** 2 + random() * (outerRadius ** 2 - innerRadius ** 2),
      );
      const thickness = (random() - 0.5) * 0.08 * (1.15 - radius / outerRadius);

      pointPositions[i * 3] = Math.cos(angle) * radius;
      pointPositions[i * 3 + 1] = Math.sin(angle) * radius;
      pointPositions[i * 3 + 2] = thickness;

      particleColor
        .copy(baseColor)
        .lerp(highlightColor, Math.pow(random(), 5) * 0.85);
      pointColors[i * 3] = particleColor.r;
      pointColors[i * 3 + 1] = particleColor.g;
      pointColors[i * 3 + 2] = particleColor.b;
    }

    return { positions: pointPositions, colors: pointColors };
  }, [color, count, innerRadius, outerRadius, seed]);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.035;
    }
  });

  return (
    <group rotation={rotation}>
      <points ref={ringRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={particleSize}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.82}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </points>
    </group>
  );
}

function Planet({
  position,
  scale,
  color,
  emissive,
  detailColor,
  roughness,
  metalness,
  clearcoat,
  iridescence,
  emissiveIntensity = 0.012,
  atmosphereOpacity = 0.025,
  detailOpacity = 0.075,
  reflectivity = 0.2,
  rotationSpeed = 0.12,
  ring,
}: PlanetProps) {
  const planetRef = React.useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * rotationSpeed;
      planetRef.current.rotation.z += delta * rotationSpeed * 0.12;
    }
  });

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.12}
      floatIntensity={0.35}
      floatingRange={[-0.12, 0.12]}
    >
      <group ref={planetRef} position={position} scale={scale}>
        <Sphere args={[1.08, 24, 18]}>
          <meshBasicMaterial
            color={emissive}
            transparent
            opacity={atmosphereOpacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.BackSide}
            toneMapped={false}
          />
        </Sphere>

        <Sphere args={[1, 40, 32]}>
          <meshPhysicalMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            roughness={Math.min(1, roughness + 0.22)}
            metalness={metalness}
            clearcoat={clearcoat * 0.2}
            clearcoatRoughness={0.65}
            iridescence={iridescence * 0.15}
            iridescenceIOR={1.45}
            reflectivity={reflectivity}
          />
        </Sphere>

        <Sphere args={[1.014, 32, 24]}>
          <MeshDistortMaterial
            color={detailColor}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity / 3}
            roughness={0.92}
            metalness={0}
            distort={0.075}
            speed={0.18}
            transparent
            opacity={detailOpacity}
            depthWrite={false}
          />
        </Sphere>

        {ring && <ParticleRing {...ring} />}
      </group>
    </Float>
  );
}

function FloatingPlanets() {
  const { size } = useThree();
  const isMobile = size.width < 768;

  return (
    <group>
      <Planet
        position={isMobile ? [-4.75, -0.9, -2.8] : [-8.5, -1.2, -2]}
        scale={isMobile ? 0.39 : 0.6}
        color="#3C00BE"
        emissive="#6f42ff"
        detailColor="#9b7cff"
        roughness={0.38}
        metalness={0.32}
        clearcoat={0.68}
        iridescence={0.38}
        rotationSpeed={0.11}
      />

      <Planet
        position={isMobile ? [2.35, -1.2, -2.5] : [5.25, -1.15, -1.5]}
        scale={isMobile ? 0.5 : 0.72}
        color="#FF860E"
        emissive="#ff5a0e"
        detailColor="#ffd09a"
        roughness={0.58}
        metalness={0.08}
        clearcoat={0.32}
        iridescence={0.08}
        rotationSpeed={-0.09}
        ring={{
          color: '#ffffff',
          rotation: [Math.PI / 2.3, -0.2, -Math.PI / 6],
          count: isMobile ? 3900 : 10400,
          seed: 8602,
          innerRadius: 2.96,
          outerRadius: 7,
          particleSize: 0.018,
        }}
      />

      <Planet
        position={isMobile ? [4.15, 3.85, -4.5] : [8.6, 4.25, -4]}
        scale={isMobile ? 0.27 : 0.38}
        color="#e8e4ff"
        emissive="#3C00BE"
        detailColor="#ffffff"
        roughness={0.58}
        metalness={0.18}
        clearcoat={0.2}
        iridescence={0.08}
        emissiveIntensity={0.002}
        atmosphereOpacity={0.008}
        detailOpacity={0.028}
        reflectivity={0.08}
        rotationSpeed={0.07}
      />
    </group>
  );
}

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
          args={[points, 3]}
          count={points.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

function Nebula({ position, color, scale = [1, 1, 1] }: { position: [number, number, number], color: string, scale?: [number, number, number] }) {
    const cloudSeed = React.useMemo(() => Math.random(), []);

    return (
        <group position={position} scale={scale}>
            <Cloud
                opacity={0.08}
                speed={0.4}
                segments={20}
                color={color}
                fade={10}
                seed={cloudSeed}
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
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color={color} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function AndromedaGalaxy() {
  const galaxyRef = React.useRef<THREE.Group>(null);
  const { size } = useThree();
  const isMobile = size.width < 768;
  const haloCount = isMobile ? 900 : 2400;
  const diskCount = isMobile ? 1600 : 4200;
  const armCount = isMobile ? 850 : 2400;
  const coreCount = isMobile ? 300 : 800;
  const dustCount = isMobile ? 300 : 850;
  const knotCount = isMobile ? 100 : 260;
  const companionCount = isMobile ? 230 : 650;

  const galaxy = React.useMemo(() => {
    const haloPositions = new Float32Array(haloCount * 3);
    const haloColors = new Float32Array(haloCount * 3);
    const diskPositions = new Float32Array(diskCount * 3);
    const diskColors = new Float32Array(diskCount * 3);
    const armPositions = new Float32Array(armCount * 3);
    const armColors = new Float32Array(armCount * 3);
    const corePositions = new Float32Array(coreCount * 3);
    const coreColors = new Float32Array(coreCount * 3);
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);
    const knotPositions = new Float32Array(knotCount * 3);
    const knotColors = new Float32Array(knotCount * 3);
    const companionPositions = new Float32Array(companionCount * 3);
    const companionColors = new Float32Array(companionCount * 3);
    const deepBlue = new THREE.Color('#071b5b');
    const electricBlue = new THREE.Color('#28b8ff');
    const paleBlue = new THREE.Color('#b7d9ff');
    const paleViolet = new THREE.Color('#d8c7ff');
    const magenta = new THREE.Color('#ff278f');
    const rose = new THREE.Color('#ff7fc1');
    const warmWhite = new THREE.Color('#fffaf8');
    const pinkWhite = new THREE.Color('#ffe1f1');
    const darkDust = new THREE.Color('#080612');
    const violetDust = new THREE.Color('#2a123f');
    const particleColor = new THREE.Color();
    let seed = 2026;

    const random = () => {
      seed += 0x6d2b79f5;
      let value = seed;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };

    for (let i = 0; i < haloCount; i++) {
      const radius = Math.pow(random(), 0.72) * 2.95;
      const angle = random() * Math.PI * 2;
      const centerBias = 1 - radius / 2.95;
      const isBlueRegion = random() > 0.64;

      haloPositions[i * 3] =
        Math.cos(angle) * radius * 1.72 + (random() - 0.5) * 0.22;
      haloPositions[i * 3 + 1] =
        Math.sin(angle) * radius * 0.5 + (random() - 0.5) * 0.28;
      haloPositions[i * 3 + 2] = (random() - 0.5) * (0.18 + radius * 0.045);

      particleColor
        .copy(isBlueRegion ? deepBlue : magenta)
        .lerp(isBlueRegion ? electricBlue : rose, 0.18 + centerBias * 0.32)
        .lerp(paleViolet, Math.pow(centerBias, 3) * 0.22);
      haloColors[i * 3] = particleColor.r;
      haloColors[i * 3 + 1] = particleColor.g;
      haloColors[i * 3 + 2] = particleColor.b;
    }

    for (let i = 0; i < diskCount; i++) {
      const radius = Math.pow(random(), 1.42) * 2.48;
      const angle = random() * Math.PI * 2;
      const centerBias = 1 - radius / 2.48;

      diskPositions[i * 3] =
        Math.cos(angle) * radius * 1.66 + (random() - 0.5) * 0.1;
      diskPositions[i * 3 + 1] =
        Math.sin(angle) * radius * 0.46 + (random() - 0.5) * 0.16;
      diskPositions[i * 3 + 2] = (random() - 0.5) * (0.12 + radius * 0.026);

      particleColor
        .copy(random() > 0.48 ? paleBlue : paleViolet)
        .lerp(rose, 0.12 + (1 - centerBias) * 0.22)
        .lerp(pinkWhite, Math.pow(centerBias, 2.2) * 0.62);
      diskColors[i * 3] = particleColor.r;
      diskColors[i * 3 + 1] = particleColor.g;
      diskColors[i * 3 + 2] = particleColor.b;
    }

    for (let i = 0; i < armCount; i++) {
      const radius = 0.38 + Math.pow(random(), 0.88) * 2.35;
      const arm = (i % 2) * Math.PI;
      const angle = arm + radius * 2.05 + (random() - 0.5) * (0.34 + radius * 0.07);
      const isBlueArm = random() > 0.58;

      armPositions[i * 3] =
        Math.cos(angle) * radius * 1.68 + (random() - 0.5) * 0.07;
      armPositions[i * 3 + 1] =
        Math.sin(angle) * radius * 0.46 + (random() - 0.5) * 0.1;
      armPositions[i * 3 + 2] = (random() - 0.5) * 0.13;

      particleColor
        .copy(isBlueArm ? electricBlue : magenta)
        .lerp(isBlueArm ? paleBlue : paleViolet, 0.45 + random() * 0.42);
      armColors[i * 3] = particleColor.r;
      armColors[i * 3 + 1] = particleColor.g;
      armColors[i * 3 + 2] = particleColor.b;
    }

    for (let i = 0; i < coreCount; i++) {
      const radius = Math.pow(random(), 2.7) * 0.78;
      const angle = random() * Math.PI * 2;

      corePositions[i * 3] = Math.cos(angle) * radius * 1.5;
      corePositions[i * 3 + 1] = Math.sin(angle) * radius * 0.48;
      corePositions[i * 3 + 2] = (random() - 0.5) * 0.15;

      particleColor.copy(rose).lerp(warmWhite, 0.72 + random() * 0.27);
      coreColors[i * 3] = particleColor.r;
      coreColors[i * 3 + 1] = particleColor.g;
      coreColors[i * 3 + 2] = particleColor.b;
    }

    for (let i = 0; i < dustCount; i++) {
      const radius = 0.58 + random() * 1.92;
      const arm = (i % 2) * Math.PI;
      const angle = arm + radius * 2.04 + (random() - 0.5) * 0.14;

      dustPositions[i * 3] = Math.cos(angle) * radius * 1.67;
      dustPositions[i * 3 + 1] =
        Math.sin(angle) * radius * 0.46 + (random() - 0.5) * 0.075;
      dustPositions[i * 3 + 2] = 0.16 + random() * 0.025;

      particleColor.copy(darkDust).lerp(violetDust, random() * 0.62);
      dustColors[i * 3] = particleColor.r;
      dustColors[i * 3 + 1] = particleColor.g;
      dustColors[i * 3 + 2] = particleColor.b;
    }

    for (let i = 0; i < knotCount; i++) {
      const radius = 0.48 + random() * 2.12;
      const arm = (i % 2) * Math.PI;
      const angle = arm + radius * 2.05 + (random() - 0.5) * 0.42;
      const isBlue = random() > 0.42;

      knotPositions[i * 3] = Math.cos(angle) * radius * 1.68;
      knotPositions[i * 3 + 1] =
        Math.sin(angle) * radius * 0.46 + (random() - 0.5) * 0.1;
      knotPositions[i * 3 + 2] = 0.19 + random() * 0.035;

      particleColor
        .copy(isBlue ? electricBlue : magenta)
        .lerp(isBlue ? warmWhite : pinkWhite, 0.35 + random() * 0.58);
      knotColors[i * 3] = particleColor.r;
      knotColors[i * 3 + 1] = particleColor.g;
      knotColors[i * 3 + 2] = particleColor.b;
    }

    for (let i = 0; i < companionCount; i++) {
      const radius = Math.pow(random(), 1.28) * 0.95;
      const angle = random() * Math.PI * 2;
      const localX = Math.cos(angle) * radius * 0.34;
      const localY = Math.sin(angle) * radius * 1.08;
      const rotation = -0.46;

      companionPositions[i * 3] =
        -1.25 + localX * Math.cos(rotation) - localY * Math.sin(rotation);
      companionPositions[i * 3 + 1] =
        2.15 + localX * Math.sin(rotation) + localY * Math.cos(rotation);
      companionPositions[i * 3 + 2] = (random() - 0.5) * 0.1;

      particleColor
        .copy(deepBlue)
        .lerp(electricBlue, 0.38 + random() * 0.46)
        .lerp(paleBlue, Math.pow(1 - radius / 0.95, 3) * 0.5);
      companionColors[i * 3] = particleColor.r;
      companionColors[i * 3 + 1] = particleColor.g;
      companionColors[i * 3 + 2] = particleColor.b;
    }

    return {
      haloPositions,
      haloColors,
      diskPositions,
      diskColors,
      armPositions,
      armColors,
      corePositions,
      coreColors,
      dustPositions,
      dustColors,
      knotPositions,
      knotColors,
      companionPositions,
      companionColors,
    };
  }, [armCount, companionCount, coreCount, diskCount, dustCount, haloCount, knotCount]);

  useFrame((_, delta) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.z += delta * 0.018;
    }
  });

  return (
    <group
      ref={galaxyRef}
      position={isMobile ? [-2, 2.85, -8] : [-4.8, 3.2, -8]}
      rotation={[0.18, -0.12, 0.42]}
      scale={isMobile ? 0.76 : 1.04}
    >
      <Sphere args={[1, 24, 16]} scale={[3.45, 0.82, 0.16]}>
        <meshBasicMaterial
          color="#d31a79"
          transparent
          opacity={0.025}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Sphere>

      <Sphere args={[1, 24, 16]} scale={[2.3, 0.48, 0.11]}>
        <meshBasicMaterial
          color="#8e5ee8"
          transparent
          opacity={0.052}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Sphere>

      <Sphere args={[1, 20, 12]} scale={[0.54, 0.16, 0.065]}>
        <meshBasicMaterial
          color="#fff0fa"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Sphere>

      <Sphere
        args={[1, 18, 12]}
        position={[-1.25, 2.15, -0.03]}
        rotation={[0, 0, -0.46]}
        scale={[0.35, 1.08, 0.07]}
      >
        <meshBasicMaterial
          color="#178de0"
          transparent
          opacity={0.035}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Sphere>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[galaxy.haloPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[galaxy.haloColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.019}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.62}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[galaxy.diskPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[galaxy.diskColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.021}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.76}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[galaxy.armPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[galaxy.armColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.023}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.76}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[galaxy.corePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[galaxy.coreColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.043}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.94}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <points renderOrder={3}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[galaxy.dustPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[galaxy.dustColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.038}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.42}
          depthTest
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <points renderOrder={4}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[galaxy.knotPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[galaxy.knotColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.021}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[galaxy.companionPositions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[galaxy.companionColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.72}
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          toneMapped={false}
        />
      </points>
    </group>
  );
}

const BLACK_HOLE_VERTEX_SHADER = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const BLACK_HOLE_FRAGMENT_SHADER = `
  uniform float uTime;
  varying vec2 vUv;

  float hash(vec2 point) {
    return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 point = (vUv - 0.5) * vec2(1.5, 1.0);
    float radius = length(point);
    float angle = atan(point.y, point.x);
    float grain = hash(floor(point * 260.0) + floor(uTime * 2.0));
    float flicker = 0.86 + 0.14 * sin(angle * 17.0 - uTime * 1.7 + grain * 4.0);

    float horizon = 1.0 - smoothstep(0.205, 0.222, radius);
    float photonCore = exp(-abs(radius - 0.235) * 145.0);
    float photonGlow = exp(-abs(radius - 0.248) * 29.0);
    float outerLens = exp(-abs(radius - 0.292) * 42.0);
    float lensBias = mix(0.58, 1.0, smoothstep(-0.25, 0.24, point.y));

    float diskExtent = 1.0 - smoothstep(0.64, 0.76, abs(point.x));
    float streamPattern =
      0.62 +
      0.38 * sin(abs(point.x) * 92.0 - uTime * 2.2 + grain * 5.0);
    float diskCore = exp(-abs(point.y) * 155.0) * diskExtent * streamPattern;
    float diskGlow = exp(-abs(point.y) * 22.0) * diskExtent;
    float diskRim =
      exp(-abs(abs(point.y) - 0.032) * 75.0) *
      diskExtent *
      (0.55 + grain * 0.45);

    float lensing = (photonCore * 1.65 + photonGlow * 0.52 + outerLens * 0.34) * lensBias;
    float disk = diskCore * 1.45 + diskRim * 0.52 + diskGlow * 0.16;
    float intensity = (lensing + disk) * flicker;

    vec3 amber = vec3(1.0, 0.24, 0.015);
    vec3 gold = vec3(1.0, 0.61, 0.12);
    vec3 hot = vec3(1.0, 0.92, 0.68);
    vec3 color = mix(amber, gold, clamp(intensity * 0.65, 0.0, 1.0));
    color = mix(color, hot, clamp(photonCore + diskCore * 0.72, 0.0, 1.0));
    color *= intensity;

    float alpha = clamp(lensing * 0.86 + disk * 0.78, 0.0, 0.94);
    color = mix(color, vec3(0.0), horizon);
    alpha = max(alpha, horizon);

    if (alpha < 0.008) {
      discard;
    }

    gl_FragColor = vec4(color, alpha);
  }
`;

function BlackHole() {
  const groupRef = React.useRef<THREE.Group>(null);
  const diskRef = React.useRef<THREE.Points>(null);
  const shaderRef = React.useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const isMobile = size.width < 768;
  const particleCount = isMobile ? 1800 : 4800;
  const shaderUniforms = React.useMemo(() => ({ uTime: { value: 0 } }), []);

  const disk = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const whiteHot = new THREE.Color('#fff4cf');
    const gold = new THREE.Color('#ffb52e');
    const orange = new THREE.Color('#ff5a0e');
    const particleColor = new THREE.Color();
    let seed = 404;

    const random = () => {
      seed += 0x6d2b79f5;
      let value = seed;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.sqrt(0.72 ** 2 + random() * (2.75 ** 2 - 0.72 ** 2));
      const angle = random() * Math.PI * 2;
      const heat = 1 - (radius - 0.72) / (2.75 - 0.72);
      const thickness = (random() - 0.5) * (0.055 + radius * 0.018);

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = thickness;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.42;

      particleColor
        .copy(orange)
        .lerp(gold, heat)
        .lerp(whiteHot, Math.pow(heat, 4) * (0.62 + random() * 0.35));
      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }

    return { positions, colors };
  }, [particleCount]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.quaternion.copy(state.camera.quaternion);
    }
    if (diskRef.current) {
      diskRef.current.rotation.y += delta * 0.085;
    }
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <group
      ref={groupRef}
      position={isMobile ? [0.8, -2.7, -13] : [2.4, -2.3, -13]}
      scale={isMobile ? 0.72 : 1.1}
    >
      <mesh position={[0, 0, -0.16]}>
        <planeGeometry args={[6, 4]} />
        <shaderMaterial
          ref={shaderRef}
          uniforms={shaderUniforms}
          vertexShader={BLACK_HOLE_VERTEX_SHADER}
          fragmentShader={BLACK_HOLE_FRAGMENT_SHADER}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <points ref={diskRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[disk.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[disk.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.023}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          toneMapped={false}
        />
      </points>

      {[0.92, 1.18, 1.48, 1.86, 2.28].map((radius, index) => (
        <mesh
          key={radius}
          rotation={[Math.PI / 2, 0, (index - 2) * 0.012]}
        >
          <torusGeometry args={[radius, 0.012 + index * 0.002, 6, 160]} />
          <meshBasicMaterial
            color={index < 2 ? '#fff0b0' : '#FF860E'}
            transparent
            opacity={0.22 - index * 0.025}
            blending={THREE.AdditiveBlending}
            depthTest
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}

      <Sphere args={[0.53, 40, 32]} position={[0, 0, 0.035]}>
        <meshBasicMaterial color="#000000" depthWrite />
      </Sphere>

      {[0.59, 0.67, 0.76].map((radius, index) => (
        <mesh key={radius} position={[0, 0, 0.06 + index * 0.004]}>
          <torusGeometry args={[radius, 0.014 + index * 0.006, 8, 160]} />
          <meshBasicMaterial
            color={index === 0 ? '#fff3bd' : '#FF860E'}
            transparent
            opacity={0.72 - index * 0.18}
            blending={THREE.AdditiveBlending}
            depthTest
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}

      <pointLight position={[0, 0.5, 1.2]} intensity={1.1} distance={6} color="#FF860E" />
    </group>
  );
}

function Comets() {
  const cometRefs = React.useRef<THREE.Group[]>([]);
  
  useFrame((_, delta) => {
    cometRefs.current.forEach((ref) => {
      if (ref) {
        ref.position.x += delta * 6;
        ref.position.y -= delta * 3;
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
            args={[points, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.3} />
      </points>
      
      <Comets />
      
      <MilkyWay position={[3, 1, -8]} color="#ffffff" scale={4} rotation={[Math.PI / 4, 0, 0]} />
      <SceneAssetErrorBoundary>
        <React.Suspense fallback={null}>
          <Nebula position={[-5, -2, -12]} color="#7000ff" scale={[2, 1, 1]} />
          <Nebula position={[6, -4, -15]} color="#00f2ff" scale={[3, 1.5, 1]} />
        </React.Suspense>
      </SceneAssetErrorBoundary>
      
      <SpiralGalaxy position={[5, 4, -10]} color="#7000ff" scale={2} />
      <SpiralGalaxy position={[-8, -6, -15]} color="#00f2ff" scale={3} />
      <BlackHole />
      <AndromedaGalaxy />
    </group>
  );
}

export default function ThreeCanvas({
  maxDpr = 2,
  presentation = 'standalone',
}: ThreeCanvasProps) {
  const isOverlay = presentation === 'overlay';

  return (
    <div
      aria-hidden={isOverlay ? undefined : 'true'}
      className={isOverlay ? 'relative h-full w-full overflow-hidden' : 'fixed inset-0 -z-10 overflow-hidden bg-[#050505]'}
    >
      <Canvas
        className="block h-full w-full"
        style={{ display: 'block', width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, maxDpr]}
        frameloop="always"
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />
        <pointLight position={[4, 1, 2]} intensity={1.4} color="#FF860E" />
        <directionalLight position={[-4, 5, 3]} intensity={0.8} color="#ffffff" />
        <AnimatedBackground />
        <FloatingPlanets />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050505]/50 to-[#050505]" />
    </div>
  );
}
