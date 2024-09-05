import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../../public/tulsi_plant/Scene';

const Practice = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model scale={[2, 2, 2]} /> {/* Adjust the scale here */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Practice;
