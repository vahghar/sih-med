import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import worldData from '../files/custom2.geo.json'; // Path to your GeoJSON file
import * as THREE from 'three';
import bg from "../assets/starry_bg.jpg";
import map from "../assets/map_1.jpg";

const GlobeComponent = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const globeEl = useRef(); // Reference for the Globe

  const herbalPlantsData = [
    {
      name: "Tulsi",
      location: { lat: 28.6139, lng: 77.209 }, // Coordinates for New Delhi, India
      description: "Tulsi (Holy Basil) is known for its medicinal properties."
    },
    {
      name: "Ginseng",
      location: { lat: 37.5665, lng: 126.978 }, // Coordinates for Seoul, South Korea
      description: "Ginseng is used to improve energy levels and boost immunity."
    },
    {
      name: "Ginkgo Biloba",
      location: { lat: 31.2304, lng: 121.4737 }, // Coordinates for Shanghai, China
      description: "Ginkgo Biloba is used for cognitive enhancement and memory."
    },
    // Add more plants here
  ];

  useEffect(() => {
    setGeoJsonData(worldData);

    if (globeEl.current) {
      const globe = globeEl.current;

      // Create a starry background sphere
      const loader = new THREE.TextureLoader();
      loader.load(bg, (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const backgroundGeometry = new THREE.SphereGeometry(100, 64, 64); // Increased size and detail
        const backgroundMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.BackSide
        });
        const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);

        // Add background mesh to the globe's scene
        globe.scene().add(backgroundMesh);
      });

      // Modify zoom speed and set max/min zoom distances
      globe.controls().zoomSpeed = 10; // Increase zoom speed
      globe.controls().minDistance = 150; // Minimum distance from the globe
      globe.controls().maxDistance = 800; // Maximum distance from the globe
    }
  }, []);

  // Adding pulsating markers effect
  const pulseAnimation = (obj) => {
    const pulseMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow'), transparent: true, opacity: 0.7 })
    );
    
    const { lat, lng } = obj.location;
    const { x, y, z } = globeEl.current.getCoords(lat, lng, 0.05); // Position slightly above the globe's surface
    pulseMesh.position.set(x, y, z);

    globeEl.current.scene().add(pulseMesh);

    const scale = { value: 0.5 };
    const animatePulse = () => {
      requestAnimationFrame(animatePulse);
      scale.value += 0.005;
      if (scale.value > 1) scale.value = 0.5;
      pulseMesh.scale.set(scale.value, scale.value, scale.value);
    };
    animatePulse();
  };

  useEffect(() => {
    herbalPlantsData.forEach(plant => pulseAnimation(plant));
  }, [herbalPlantsData]);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl={map} // Use texture for the globe
      showGraticules={false} // Hide grid lines
      polygonsData={geoJsonData ? geoJsonData.features : []}
      polygonCapColor={() => 'rgba(0,0,0,0)'} // Transparent polygons
      polygonSideColor={() => 'rgba(0,0,0,0)'} // Transparent polygons
      autoRotate={true} // Enable auto-rotation
      autoRotateSpeed={1} // Adjust rotation speed
      atmosphereColor="rgba(255, 255, 255, 0.1)" // Atmosphere effect
      atmosphereAltitude={0.1} // Adjust atmosphere height
      
      // Add markers for herbal plants
      labelsData={herbalPlantsData}
      labelLat={(d) => d.location.lat}
      labelLng={(d) => d.location.lng}
      labelText={(d) => d.name}
      labelSize={2.5} // Increased label size
      labelColor={(d) => d.isHovered ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
      labelAltitude={0.02} // Increased altitude to avoid overlap
      labelResolution={3} // Decrease resolution to improve hit detection

      // Tooltip or popup on hover with Tailwind CSS
      labelLabel={(d) => `
        <div class="p-2 bg-gray-800 text-white rounded-lg shadow-lg">
          <div class="text-xl font-bold">${d.name}</div>
          <div class="text-sm">${d.description}</div>
        </div>`
      }
    />
  );
};

export default GlobeComponent;
