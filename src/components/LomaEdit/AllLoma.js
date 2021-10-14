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
    Legs: "#0f0",
    Floor: '#f0f',
    Bottom: '#00f',
    Top: '#ff0',
    Left: '#00f0ff',
    Right: '#fe550e',
  }
});

function Chair(props, chair, plasticTop, meshTop, plasticBottom, meshBottom, flatTop, flatBottom, flatLeft,
  flatRight, softRight, softLeft, double, single, sofLone, floor, softTop, softLone, softBottom, tall, flatLone) {
  const group = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('all-loma.glb')
  const [hovered, set] = useState(null)
 
  return (
    <group 
      ref={group} {...props} 
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <group
        position={[-0.17, -9.41, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}>
        <mesh
          geometry={nodes.PlasticTop.geometry}
          material={nodes.PlasticTop.material}
          material-color={snap.items.Top}
          visible={plasticTop}
        />
        <mesh
          geometry={nodes.MeshTop.geometry}
          material={nodes.MeshTop.material}
          material-color={snap.items.Top}
          visible={meshTop}
        />
      </group>

      <group 
          position={[-0.17, -9.42, -0.38]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.07}>
        <mesh
          geometry={nodes.PlasticBottom.geometry}
          material={nodes.PlasticBottom.material}
          material-color={snap.items.Bottom}
          visible={plasticBottom}
        />
        <mesh
          geometry={nodes.MeshBottom.geometry}
          material={nodes.MeshBottom.material}
          material-color={snap.items.Bottom}
          visible={meshBottom}
        />
        <mesh
          geometry={nodes.FlatTop.geometry}
          material={nodes.FlatTop.material}
          material-color={snap.items.Top}
          visible={flatTop}
        />
      </group>

      <group
          position={[-0.17, -9.49, -0.38]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.07}>
        <mesh
          geometry={nodes.FlatBottom.geometry}
          material={nodes.FlatBottom.material}
          material-color={snap.items.Bottom}
          visible={flatBottom}
        />
        <mesh
          geometry={nodes.FlatLeft.geometry}
          material={nodes.FlatLeft.material}
          material-color={snap.items.Left}
          visible={flatLeft}
        />
        <mesh
          geometry={nodes.FlatRight.geometry}
          material={nodes.FlatRight.material}
          material-color={snap.items.Right}
          visible={flatRight}
        />
        <mesh
          geometry={nodes.TextileRight.geometry}
          material={nodes.TextileRight.material}
          material-color={snap.items.Right}
          visible={softRight}
        />
        <mesh
          geometry={nodes.TextileLeft.geometry}
          material={nodes.TextileLeft.material}
          material-color={snap.items.Left}
          visible={softLeft}
        />
        <mesh
          geometry={nodes.Double.geometry}
          material={nodes.Double.material}
          material-color={snap.items.Legs}
          visible={double}
        />
        <mesh
          geometry={nodes.TallSingle.geometry}
          material={nodes.TallSingle.material}
          material-color={snap.items.Legs}
          visible={single}
        />
        <mesh
          geometry={nodes.TextileBottomSingle.geometry}
          material={nodes.TextileBottomSingle.material}
          material-color={snap.items.Legs}
          visible={softLone}
        />
        <mesh
          geometry={nodes.Base2.geometry}
          material={materials.Floor}
          material-color={snap.items.Floor}
          visible={floor}
        />
        <mesh 
          geometry={nodes.Legs002.geometry} 
          material={nodes.Legs002.material} 
          material-color={snap.items.Legs}
          visible={chair}
        />
        <mesh 
          geometry={nodes.Legs002_1.geometry} 
          material={nodes.Legs002.material} 
          material-color={snap.items.Legs}
          visible={chair}
        />
        <mesh
          geometry={nodes.TextileTop2.geometry}
          material={nodes.TextileTop2.material}
          material-color={snap.items.Top}
          visible={softTop}
        />
        <mesh
          geometry={nodes.TextileTop1.geometry}
          material={nodes.TextileTop1.material}
          material-color={snap.items.Top}
          visible={softTop}
        />
        <mesh
          geometry={nodes.TextileBottom1.geometry}
          material={nodes.TextileBottom1.material}
          material-color={snap.items.Bottom}
          visible={softBottom}
        />
        <mesh
          geometry={nodes.TextileBottom2.geometry}
          material={nodes.TextileBottom2.material}
          material-color={snap.items.Bottom}
          visible={softBottom}
        />
        <mesh
          geometry={nodes.TallChair.geometry}
          material={nodes.TallChair.material}
          material-color={snap.items.Legs}
          visible={tall}
        />
      </group>

      <mesh
        geometry={nodes.FlatBottomSingle.geometry}
        material={nodes.FlatBottomSingle.material}
        position={[-0.17, -9.49, -1.52]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
        material-color={snap.items.Bottom}
        visible={flatLone}
      />
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

function LomaEdit(floor)  {
  console.log(floor)
  return (
    <>
      <Canvas orthographic camera={{ zoom: 28, position: [10, 10, 10] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.4} position={[5,20,20]}/>
        <pointLight intensity={0.75} />
        <Suspense fallback={null}>
          <Chair floor={floor}/>
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
  const [floor, setFloor] = useState(false)

  const [double, setDouble] = useState(false)
  const [tall, setTall] = useState(false)
  const [single, setSingle] = useState(true)
  const [chair, setChair] = useState(false)

  const [plasticTop, setPlasticTop] = useState(false)
  const [plasticBottom, setPlasticBottom] = useState(false)
  const [flatTop, setFlatTop] = useState(false)
  const [flatBottom, setFlatBottom] = useState(false)
  const [softTop, setSoftTop] = useState(false)
  const [softBottom, setSoftBottom] = useState(false)
  const [meshTop, setMeshTop] = useState(false)
  const [meshBottom, setMeshBottom] = useState(false)
  
  const [flatLeft, setFlatLeft] = useState(false)
  const [flatRight, setFlatRight] = useState(false)
  const [softRight, setSoftRight] = useState(false)
  const [softLeft, setSoftLeft] = useState(false)
  
  const [softLone, setSoftLone] = useState(false)
  const [flatLone, setFlatLone] = useState(true)

  const C11 = () => {
    setFloor(false)
}
  }
  return (
    <>    
    <IconContext.Provider value={{ color: '#fff', size: 29 }}>
      <div className="section">
      <Loader loading={loading}></Loader>
        <BackBottom stepThree={stepThree} onClick={moveToSecond}>
          <BiArrowBack style={{ paddingTop: 5 }}/>
        </BackBottom>
        <a href="/loma">
          <BackButton stepThree={stepThree}>
            <BiX style={{ paddingTop: 4 }}/>
          </BackButton>
        </a>
        <Container stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
          <UiWrapper stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree} id="my-node">
            <ModelWindow stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>   
              <img className="loma-logotype" src={Image1} alt="loma"/>
              <SelectionName stepThree={stepThree}>
                <IconContext.Provider value={{ color: '#5b5b5b', size: 20 }}>
                  <h4><HiCursorClick style={{ marginBottom: -4, marginRight: 1 }} /> {snap.current}</h4>
                </IconContext.Provider>
              </SelectionName>
              {/* <LomaEdit floor={floor}/> */}
            </ModelWindow>   
            <Settings id="settings" stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>   
              <h4>Material Color</h4>    
                <Picker />                
              <h4>Sit Design</h4>   
              <div>
                <div className="sit-button" onClick={C11}>
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
        
        <a href="/loma">
          <OrderButton stepThree={stepThree} id="snapshot">
            <h3>Order + Post in Showcase</h3>
          </OrderButton> 
        </a>
      </div>
      </IconContext.Provider>
    </>
    )
}

export default Interface;