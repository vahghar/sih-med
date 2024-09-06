import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import Model from "../../../public/globe/Scene";

const Home2 = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-start bg-cover bg-center overflow-hidden">
      <Canvas
        className="w-1/2 h-auto"
        gl={{ alpha: false, antialias: true }}
        style={{ background: "black" }} // Set canvas background to black
      >
        {/* Starry background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* Adjust ambient light intensity to make the globe darker */}
        <ambientLight intensity={0.2} /> {/* Reduce intensity to darken the model */}
        <OrbitControls />
        <Suspense fallback={null}>
          <Model /> {/* Adjust position to move model left */}
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Home2;
