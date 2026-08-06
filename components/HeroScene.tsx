"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  RoundedBox,
  Text,
  Environment,
} from "@react-three/drei";

function Dashboard() {
  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.7}>
      <group rotation={[0, -0.25, 0]}>
        {/* Main Panel */}
        <RoundedBox args={[5.5, 3.5, 0.25]} radius={0.15}>
          <meshStandardMaterial
            color="#161616"
            metalness={0.8}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Top Left */}
        <mesh position={[-1.4, 0.8, 0.15]}>
          <boxGeometry args={[1.5, 0.7, 0.05]} />
          <meshStandardMaterial color="#3ecf8e" />
        </mesh>

        {/* Top Right */}
        <mesh position={[1.4, 0.8, 0.15]}>
          <boxGeometry args={[1.5, 0.7, 0.05]} />
          <meshStandardMaterial color="#5b8cff" />
        </mesh>

        {/* Graph */}
        <mesh position={[0, -0.35, 0.15]}>
          <boxGeometry args={[4.2, 1.1, 0.05]} />
          <meshStandardMaterial color="#2b2b2b" />
        </mesh>

        <Text
          position={[0, -1.15, 0.18]}
          fontSize={0.18}
          color="#3ecf8e"
          anchorX="center"
          anchorY="middle"
        >
          ALL TESTS PASSED ✓
        </Text>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none h-[430px] w-[520px]">
      <Canvas camera={{ position: [0, 0, 9], fov: 30 }} gl={{ alpha: true }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Environment preset="city" />

        <Dashboard />

        {/* Selenium */}
        <Float speed={1.5} floatIntensity={2}>
          <group position={[-3.8, 1.8, -1]}>
            <mesh>
              <boxGeometry args={[1.25, 0.4, 0.05]} />
              <meshStandardMaterial color="#3ecf8e" />
            </mesh>

            <Text
              position={[0, 0, 0.04]}
              fontSize={0.12}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              Selenium
            </Text>
          </group>
        </Float>

        {/* Java */}
        <Float speed={2} floatIntensity={2}>
          <group position={[3.7, 1.3, -1]}>
            <mesh>
              <boxGeometry args={[1, 0.4, 0.05]} />
              <meshStandardMaterial color="#ff9800" />
            </mesh>

            <Text
              position={[0, 0, 0.04]}
              fontSize={0.12}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              Java
            </Text>
          </group>
        </Float>

        {/* SQL */}
        <Float speed={2.3} floatIntensity={2}>
          <group position={[-3, -1.5, -1]}>
            <mesh>
              <boxGeometry args={[0.9, 0.4, 0.05]} />
              <meshStandardMaterial color="#4cafef" />
            </mesh>

            <Text
              position={[0, 0, 0.04]}
              fontSize={0.12}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              SQL
            </Text>
          </group>
        </Float>

        {/* TestNG */}
        <Float speed={1.8} floatIntensity={2}>
          <group position={[3, -1.8, -1]}>
            <mesh>
              <boxGeometry args={[1.15, 0.4, 0.05]} />
              <meshStandardMaterial color="#ff4f4f" />
            </mesh>

            <Text
              position={[0, 0, 0.04]}
              fontSize={0.12}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              TestNG
            </Text>
          </group>
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
        />
      </Canvas>
    </div>
  );
}
