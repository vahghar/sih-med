/*import React from "react";
import EarthDayMap from "../../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg";
import EarthCloudMap from "../../assets/8k_earth_clouds.jpg";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import "./Homepage.css"

const HeroSection = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudMap,
  ]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight color="#f6f3ea" position={[2,0,2]} intensity={3}/>
      <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true}/>
      <mesh>
        <sphereGeometry args={[1,32,32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
      </mesh>

      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.1} roughness={0.7}/>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true}
        zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
      </mesh>
    </>
  );
};

export default HeroSection;*/
