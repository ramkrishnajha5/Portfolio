
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const { theme } = props;
  
  const [positions, colors] = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 25; // Larger radius
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Adjust particle colors based on theme
      // Dark: Teal to Pink. Light: Indigo to Pink
      let mixedColor;
      if (theme === 'light') {
        mixedColor = color.set("#0f766e").lerp(new THREE.Color("#db2777"), Math.random());
      } else {
        mixedColor = color.set("#2dd4bf").lerp(new THREE.Color("#ec4899"), Math.random());
      }
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, [theme]); // Re-calculate if theme changes

  useFrame((state, delta) => {
    if (ref.current) {
      // Automatic slow rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
      
      // Mouse interaction (lerp for smoothness)
      const x = mouse.x * 0.2;
      const y = mouse.y * 0.2;
      ref.current.rotation.x += (y - ref.current.rotation.x) * delta * 0.5;
      ref.current.rotation.y += (x - ref.current.rotation.y) * delta * 0.5;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'light' ? 0.6 : 0.8}
          blending={THREE.NormalBlending} 
        />
      </Points>
    </group>
  );
};

const HeroBackground: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  // Updated light mode background color to match index.html
  const bgColor = theme === 'dark' ? '#030303' : '#f0f4f8';
  const fogColor = theme === 'dark' ? '#030303' : '#f0f4f8';

  return (
    <div className={`fixed inset-0 -z-50 h-screen w-full transition-colors duration-500`} style={{ backgroundColor: bgColor }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <fog attach="fog" args={[fogColor, 8, 30]} />
        <ParticleField theme={theme} />
      </Canvas>
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[${bgColor}]/80 pointer-events-none`}></div>
    </div>
  );
};

export default HeroBackground;
