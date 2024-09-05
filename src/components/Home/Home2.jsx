import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../../../public/globe/Scene";

const Home2 = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-start bg-cover bg-center overflow-hidden"
    >
      <Canvas className="w-1/2 h-auto">
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model/> {/* Adjust position to move model left */}
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Home2;
