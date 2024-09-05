import React, { useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../../public/tulsi_plant/Scene'; // Adjust import as needed
import plant_bg from "../../assets/tulsi-big-bg.png";
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const TopDownCamera = () => {
    const { camera } = useThree();
    camera.position.set(2, 5, 4); // Position the camera above the model
    camera.lookAt(0, 0, 0); // Look at the center of the scene
    return null;
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-[#012b00] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${plant_bg})`, filter: 'blur(5px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className={`relative z-10 p-5 rounded-xl ${expanded ? 'w-3/4 h-[28rem]' : 'w-3/4 h-96'} transition-all duration-300 ease-in-out`}>
        <button
          onClick={handleExpand}
          className={`absolute ${expanded ? 'top-4 right-8 w-48 h-48' : 'top-4 right-8 w-64 h-64'} p-0 border-0 bg-transparent cursor-pointer transition-all duration-300 ease-in-out z-20`}
          aria-label="Expand/Collapse Image"
        >
          <div className="w-full h-full">
            <Canvas className="w-full h-full">
              <TopDownCamera />
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              {/* Adjust the model's position using the `position` prop */}
              <Model position={[1, 0, 0]} /> {/* Move the model slightly to the right */}
            </Canvas>
          </div>
        </button>

        <div
          className={`bg-[#373737] absolute ${expanded ? 'bottom-4 right-4 w-3/4 h-4/5' : 'bottom-4 right-4 w-1/2 h-3/4'} p-3 text-lg text-white border-2 border-white rounded-xl z-10 transition-all duration-300 ease-in-out`}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {expanded ? (
            <div>
              <div style={{ color: '#B0B0B0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '30px', fontWeight: 'normal' }}>
                TULSI (Ocimum tenuiflorum)
              </div>
              <div style={{ marginTop: '1rem' }}>
                <div><span style={{ fontWeight: '500' }}>Medicinal Use:</span></div>
                <p style={{ fontWeight: 'lighter', marginTop: '0.5rem' }}>
                  Tulsi is renowned for its adaptogenic properties, helping the body adapt to stress and restore balance. It is rich in antioxidants and has anti-inflammatory, antiviral, and antibacterial properties. It can be used to treat respiratory conditions such as asthma, bronchitis, and the common cold. It also aids in managing diabetes by regulating blood sugar levels, and supports heart health by reducing blood pressure and cholesterol levels. Additionally, it is known to boost immunity, improve digestion, and alleviate skin conditions like acne and eczema. Its ability to detoxify the body and protect against infections makes it a powerful natural remedy in holistic health practices.
                </p>
              </div>
              <div style={{ marginTop: '5px', fontSize: '15px' }}>
                <a
                  href="https://global-herb.vercel.app/search/tulsi/stats"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  Medicinal stats
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ color: '#B0B0B0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '30px', fontWeight: 'normal' }}>TULSI</div>
              <div style={{ marginTop: '0.5rem' }}>
                <div><span style={{ fontWeight: '500' }}>PLANT NAME:</span> <span style={{ fontWeight: 'lighter' }}>Ocimum tenuiflorum</span></div>
                <div><span style={{ fontWeight: '500' }}>FAMILY NAME:</span> <span style={{ fontWeight: 'lighter' }}>Lamiaceae</span></div>
                <div><span style={{ fontWeight: '500' }}>COMMON NAME:</span> <span style={{ fontWeight: 'lighter' }}>Tulsi, Holy Basil</span></div>
                <div><span style={{ fontWeight: '500' }}>CONTINENT:</span> <span style={{ fontWeight: 'lighter' }}>Asia</span></div>
                <div><span style={{ fontWeight: '500' }}>MAJORLY FOUND IN:</span> <span style={{ fontWeight: 'lighter' }}>India</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
