import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from '@react-three/drei';

import "../../styles.css";

import ModelParts from './ModelParts';

function LomaCanvas({floor, chair, tall, plasticTop, meshTop, plasticBottom, meshBottom,
  flatTop, flatBottom, softTop, softBottom, snap})  {
  return (
    <>
      <Canvas orthographic camera={{ zoom: 28, position: [10, 10, 10] }} >
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.4} position={[5,20,20]}/>
        <pointLight intensity={0.75} />
        <Suspense fallback={null}>
          <ModelParts floor={floor} chair={chair} tall={tall}
              plasticTop={plasticTop} plasticBottom={plasticBottom}
              flatTop={flatTop} flatBottom={flatBottom}
              softTop={softTop} softBottom={softBottom}
              meshTop={meshTop} meshBottom={meshBottom} snap={snap} />
          <ContactShadows rotation-x={Math.PI/2} position={[0, 1, 0]} opacity={0.9} width={10} height={10} blur={1.5} far={4} />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI/1.9}  enablePan={false} enableZoom={false} enableRotate={true}/>
      </Canvas>
    </>
  );
}

export default LomaCanvas;