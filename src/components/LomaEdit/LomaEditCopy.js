import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { proxy, useSnapshot } from "valtio";
import { CirclePicker } from 'react-color'
import { BiArrowBack, BiX } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { HiCursorClick } from 'react-icons/hi';
import {
  ModelWindow,
  UiWrapper,
  Settings,
  Container,
  BackButton,
  BackBottom,
  NextButton,
  FinishButton,
  OrderButton,
  SelectionName
} from './LomaEdit.elements' 
import { Loader } from '../../globalStyles';

import "../../styles.css";

import Image1 from '../../assets/loma-type.svg'
import Image2 from '../../assets/loma-silhoutte.svg'
import Image3 from '../../assets/loma-sits-01.svg'
import Image4 from '../../assets/loma-sits-02.svg'
import Image5 from '../../assets/loma-sits-03.svg'
import Image6 from '../../assets/loma-sits-04.svg'

const state = proxy({
  current: null,
  items: {
    Legs: "#d1d1d1",
    Material: '#d1d1d1',
    PlasticBottom: '#d1d1d1',
    PlasticTop: '#d1d1d1',
  }
});

function Chair(props) {
  const group = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('one-loma.glb')
  const [hovered, set] = useState(null)
  return (
    <group 
      ref={group} {...props} 
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <mesh
        geometry={nodes.PlasticBottom.geometry}
        material={materials.PlasticBottom}
        position={[0, -9.97, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
        material-color={snap.items.PlasticBottom}
        visible={true}
      />
      <mesh
        geometry={nodes.PlasticTop.geometry}
        material={materials.PlasticTop}
        position={[0, -9.9, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
        material-color={snap.items.PlasticTop}
      />
      <mesh
        geometry={nodes.Base1.geometry}
        material={materials.Material}
        position={[0, -10, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
        material-color={'#d1d1d1'}
      />
      <group position={[0, -10, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
        <mesh material-color={snap.items.Legs} geometry={nodes.ShortChair_1.geometry} material={materials.Legs} />
        <mesh material-color={snap.items.Legs} geometry={nodes.ShortChair_2.geometry} material={materials.Legs} />
      </group>
    </group>
  )
}

function Picker() {
  const snap = useSnapshot(state)
  const [selectedColor, setSelectedColor] = useState("#fff")
  return (
    <div className="picker-container">
      <CirclePicker className="picker"
        width="31vw"
        colors={["#0f0fff", "#767fbb", "#d8adb4", "#81ac94", "#cb5f5c", "#9fcad1", "#d1af31", "#00ff00", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#ffffff", "#bdbdbd", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#303030"]}
        color={state.items[snap.current]}
        onChange={(color) => {
          setSelectedColor(color.hex);
          (state.items[snap.current]=color.hex);
        }} 
       />
    </div>
    )
}

function LomaEdit()  {
  return (
    <>
      <Canvas orthographic camera={{ zoom: 33, position: [10, 10, 10] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.4} position={[5,20,20]}/>
        <pointLight intensity={0.75} />
        <Suspense fallback={null}>
          <Chair />
          <Environment files="hdr.hdr" />
          <ContactShadows rotation-x={Math.PI/2} position={[0, 1, 0]} opacity={0.9} width={10} height={10} blur={1.5} far={4} />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI/1.9}  enablePan={false} enableZoom={false} enableRotate={true}/>
      </Canvas>
    </>
  );
}


const Interface = () => {
  const snap = useSnapshot(state)
  const [loading, setLoading] = useState(true)
  const [stepOne, setStepOne] = useState(false)
  const [stepTwo, setStepTwo] = useState(true)
  const [stepThree, setStepThree] = useState(false)  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const moveToSecond = () => {
    setStepOne(false)
    setStepTwo(true)
    setStepThree(false)
  }

  const moveToThird = () => {
    setStepTwo(false)
    setStepThree(true)    
  }
  return (
    <>    
    <IconContext.Provider value={{ color: '#fff', size: 29 }}>
      <div className="section">
      <Loader loading={loading}></Loader>
        <BackBottom stepThree={stepThree} onClick={moveToSecond}>
          <BiArrowBack style={{ paddingTop: 5 }}/>
        </BackBottom>
        <a href="/">
          <BackButton stepThree={stepThree}>
            <BiX style={{ paddingTop: 4 }}/>
          </BackButton>
        </a>
        <Container stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
          <UiWrapper stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
            <ModelWindow stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>   
              <img className="loma-logotype" src={Image1} alt="loma"/>
              <SelectionName stepThree={stepThree}>
                <IconContext.Provider value={{ color: '#5b5b5b', size: 20 }}>
                  <h4><HiCursorClick style={{ marginBottom: -4, marginRight: 1 }} /> {snap.current}</h4>
                </IconContext.Provider>
              </SelectionName>
              <LomaEdit />
            </ModelWindow>   
            <Settings id="settings" stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>   
              <h4>Material Color</h4>    
                <Picker />                
              <h4>Sit Design</h4>   
              <div>
                <div className="sit-button">
                  <img className="loma-side" src={Image3} alt="loma"/>
                </div>
                
                <div className="sit-button">
                  <img className="loma-side" src={Image4} alt="loma"/>
                </div>
                
                <div className="sit-button">
                  <img className="loma-side" src={Image5} alt="loma"/>
                </div>

                <div className="sit-button">
                  <img className="loma-side" src={Image6} alt="loma"/>
                </div>
              </div>
              <h4>Leg Shape</h4>     
              <div>
                <div className="sit-button">
                  <img className="loma-side" src={Image2} alt="loma"/>
                </div>
                
                <div className="sit-button">
                  <img className="loma-side" src={Image2} alt="loma"/>
                </div>
                
                <div className="sit-button">
                  <img className="loma-side" src={Image2} alt="loma"/>
                </div>
              </div>
            </Settings>     
          </UiWrapper>
        </Container>      

        <NextButton stepOne={stepOne} onClick={moveToSecond}>
          <h3>Next Step</h3>
        </NextButton> 

        <FinishButton stepThree={stepThree} stepTwo={stepTwo} onClick={moveToThird}>
          <h3>Finish Design</h3>
        </FinishButton> 
        
        <a href="/">
          <OrderButton stepThree={stepThree}>
            <h3>Order + Post in Showcase</h3>
          </OrderButton> 
        </a>
      </div>
      </IconContext.Provider>
    </>
    )
}

export default Interface;