import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { proxy, useSnapshot } from "valtio";
import { CirclePicker } from 'react-color'
import { BiArrowBack, BiX } from 'react-icons/bi';
import { GiClick } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { HiCursorClick } from 'react-icons/hi';
import { useHistory } from "react-router-dom";
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
  SelectionName,
  Section,
  LomaLogotype,
  SitButton,
  InsideButton,
  SitSettings,
  LegSettings,
  ColorSettings,
  SettingButtons,
  SettingsMobilePages
} from './LomaEdit.elements' 
import { Loader } from '../../globalStyles';

import "../../styles.css";

import Image1 from '../../assets/loma-type.svg'
import Image2 from '../../assets/loma-silhoutte.svg'
import Image3 from '../../assets/loma-sits-01.svg'
import Image4 from '../../assets/loma-sits-02.svg'
import Image5 from '../../assets/loma-sits-03.svg'
import Image6 from '../../assets/loma-sits-04.svg'
import Image7 from '../../assets/loma-silhoutte-02.svg'

const state = proxy({
  current: null,
  items: {
    Legs: '#bdbdbd',
    Floor: '#bdbdbd',
    Bottom: '#bdbdbd',
    Top: '#bdbdbd',
    Left: '#bdbdbd',
    Right: '#bdbdbd'
  }
});

function Chair({props, chair, plasticTop, meshTop, plasticBottom, meshBottom,
  flatTop, flatBottom, floor, softTop, softBottom, tall}) {
  const group = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('all-loma.glb')
  const [hovered, set] = useState(null)
  return (
    <>
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
          position={[-0.17, -9.48, -0.38]}
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
      </group>

      <group 
          position={[-0.14, -9.35, -0.38]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.07}>
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
          geometry={nodes.ShortChair.geometry}
          material={nodes.ShortChair.material}
          material-color={snap.items.ShortChair}
          visible={chair}
        />
        <mesh
          geometry={nodes.TextileTop.geometry}
          material={nodes.TextileTop.material}
          material-color={snap.items.Top}
          visible={softTop}
        />
        <mesh
          geometry={nodes.TextileBottom.geometry}
          material={nodes.TextileBottom.material}
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
    </group>
    <group
    position={[-0.17, -9.49, -0.38]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.07}>
    <mesh
      geometry={nodes.Base.geometry}
      material={materials.Floor}
      material-color={snap.items.Floor}
      visible={floor}
    />
  </group>
  </>
  )
}

function Picker() {
  const snap = useSnapshot(state)
  const [selectedColor, setSelectedColor] = useState("#fff")
  return (
    <div className="picker-container">
      <CirclePicker className="picker"
        width="100%"
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

function LomaEdit({floor, chair, tall, plasticTop, meshTop, plasticBottom, meshBottom,
  flatTop, flatBottom, softTop, softBottom})  {
  return (
    <>
      <Canvas orthographic camera={{ zoom: 28, position: [10, 10, 10] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.4} position={[5,20,20]}/>
        <pointLight intensity={0.75} />
        <Suspense fallback={null}>
          <Chair floor={floor} chair={chair} tall={tall}
              plasticTop={plasticTop} plasticBottom={plasticBottom}
              flatTop={flatTop} flatBottom={flatBottom}
              softTop={softTop} softBottom={softBottom}
              meshTop={meshTop} meshBottom={meshBottom}/>
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

  //loading screen state
  const [loading, setLoading] = useState(true)
  //removes loading screen
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  
  //steps states
  const [stepOne, setStepOne] = useState(false)
  const [stepTwo, setStepTwo] = useState(true)
  const [stepThree, setStepThree] = useState(false)  

  //step 1: shows all leg shapes at once without settings (skipped for now)

  //reveals settings to edit the chair
  const moveToSecond = () => {
    setStepOne(false)
    setStepTwo(true)
    setStepThree(false)
  }
  //hides settings & shows final result
  const moveToThird = () => {
    setStepTwo(false)
    setStepThree(true)    
  }

  //leg states
  const [floor, setFloor] = useState(false)
  const [tall, setTall] = useState(true)
  const [chair, setChair] = useState(false)
  //both top and bottom sit states
  const [plasticTop, setPlasticTop] = useState(true)
  const [plasticBottom, setPlasticBottom] = useState(true)
  const [flatTop, setFlatTop] = useState(false)
  const [flatBottom, setFlatBottom] = useState(false)
  const [softTop, setSoftTop] = useState(false)
  const [softBottom, setSoftBottom] = useState(false)
  const [meshTop, setMeshTop] = useState(false)
  const [meshBottom, setMeshBottom] = useState(false)

  const Clegs = () => {
    setFloor(true)
    setTall(false)
    setChair(true)
  }

  const Tlegs = () => {
    setFloor(false)
    setTall(true)
    setChair(false)
  }

  const Plastic = () => {
    setPlasticTop(true)
    setPlasticBottom(true)
    setFlatTop(false)
    setFlatBottom(false)
    setSoftTop(false)
    setSoftBottom(false)
    setMeshTop(false)
    setMeshBottom(false)
  }

  const Flat = () => {
    setPlasticTop(false)
    setPlasticBottom(false)
    setFlatTop(true)
    setFlatBottom(true)
    setSoftTop(false)
    setSoftBottom(false)
    setMeshTop(false)
    setMeshBottom(false)
  }

  const Soft = () => {
    setPlasticTop(false)
    setPlasticBottom(false)
    setFlatTop(false)
    setFlatBottom(false)
    setSoftTop(true)
    setSoftBottom(true)
    setMeshTop(false)
    setMeshBottom(false)
  }

  const Mesh = () => {
    setPlasticTop(false)
    setPlasticBottom(false)
    setFlatTop(false)
    setFlatBottom(false)
    setSoftTop(false)
    setSoftBottom(false)
    setMeshTop(true)
    setMeshBottom(true)
  }

  //settings pages on mobile
  const [pageOne, setPageOne] = useState(true)
  const [pageTwo, setPageTwo] = useState(false)
  const [pageThree, setPageThree] = useState(false)  

  const pagedOne = () => {
    setPageOne(true)
    setPageTwo(false)
    setPageThree(false)
  }

  const pagedTwo = () => {
    setPageOne(false)
    setPageTwo(true)
    setPageThree(false)
  }

  const pagedThree = () => {
    setPageOne(false)
    setPageTwo(false)
    setPageThree(true)
  }

  const [mobileButton, setMobileButton] = useState(true);

  const showMobileButton = () => {
      if(window.innerWidth <= 991) {
          setMobileButton(false)
      } else {
          setMobileButton(true)
      }
  };

  useEffect(() => {
      showMobileButton();
  }, []);

  window.addEventListener('resize', showMobileButton);
  const history = useHistory();

  const redirect = () => {
    setLoading(true); 
    setTimeout(() => {history.push('/')}, 1000);
}

  return (
    <>    
    <IconContext.Provider value={{ color: '#fff', size: 29 }}>
      <Section>
      <Loader loading={loading}></Loader>
        <BackBottom stepThree={stepThree} onClick={moveToSecond}>
          <BiArrowBack style={{ paddingTop: 5 }}/>
        </BackBottom>
          <BackButton stepThree={stepThree} onClick={redirect}>
            <BiX style={{ paddingTop: 4 }}/>
          </BackButton>
        <Container stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
          <UiWrapper stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
            <ModelWindow stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>   
              <LomaLogotype src={Image1} alt="loma"/>
              <SelectionName stepThree={stepThree}>
                <IconContext.Provider value={{ color: '#5b5b5b', size: 20 }}>
                  <h4>{mobileButton ? (<HiCursorClick style={{ marginBottom: -4, marginRight: 1 }} />) : (<GiClick style={{ marginBottom: -4, marginRight: 1 }}/>)} {snap.current}</h4>
                </IconContext.Provider>
              </SelectionName>
              <LomaEdit floor={floor} tall={tall} chair={chair} 
              plasticTop={plasticTop} plasticBottom={plasticBottom}
              flatTop={flatTop} flatBottom={flatBottom}
              softTop={softTop} softBottom={softBottom}
              meshTop={meshTop} meshBottom={meshBottom}/>
            </ModelWindow>   
            <Settings id="settings" stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>                
              <SitSettings mobilePage={pageOne}>
                <h4>Sit Design</h4>   
                <div>
                  <SitButton active={plasticTop} onClick={Plastic}>
                    <InsideButton active={plasticTop} src={Image3} alt="loma"/>
                  </SitButton>
                  
                  <SitButton active={flatTop} onClick={Flat}>
                    <InsideButton active={flatTop} src={Image4} alt="loma"/>
                  </SitButton>
                  
                  <SitButton active={softTop} onClick={Soft}>
                    <InsideButton active={softTop} src={Image5} alt="loma"/>
                  </SitButton>

                  <SitButton active={meshTop} onClick={Mesh}>
                    <InsideButton active={meshTop} src={Image6} alt="loma"/>
                  </SitButton>
                </div>
              </SitSettings>
              <LegSettings mobilePage={pageTwo}>
                <h4>Leg Shape</h4>  
                <div>
                <SitButton active={tall} onClick={Tlegs}>
                  <InsideButton active={tall} src={Image2} alt="loma"/>
                </SitButton>
                
                <SitButton active={chair} onClick={Clegs}>
                  <InsideButton active={chair} src={Image7} alt="loma"/>
                </SitButton>
                </div>
              </LegSettings>
              <ColorSettings mobilePage={pageThree}>
                <div><h4>Material Color</h4><h3>{showMobileButton ? "Tap part to change colors" : "Click part to change colors"}</h3></div>
                <Picker />
              </ColorSettings>
            </Settings>     
          </UiWrapper>
        </Container>      

        <SettingsMobilePages stepThree={stepThree}>
          <SettingButtons stepThree={stepThree} onClick={pagedOne} active={pageOne}>1</SettingButtons> 
          <SettingButtons stepThree={stepThree} onClick={pagedTwo} active={pageTwo}>2</SettingButtons> 
          <SettingButtons stepThree={stepThree} onClick={pagedThree} active={pageThree}>3</SettingButtons> 
        </SettingsMobilePages>

        <NextButton stepOne={stepOne} onClick={moveToSecond}>
          <h3>Next Step</h3>
        </NextButton> 

        <FinishButton stepThree={stepThree} stepTwo={stepTwo} onClick={moveToThird}>
          <h3>Done</h3>
        </FinishButton> 
        
        <OrderButton stepThree={stepThree}>
          <h3>Order + Post in Showcase</h3>
        </OrderButton> 
      </Section>
      </IconContext.Provider>
    </>
    )
}

export default Interface;