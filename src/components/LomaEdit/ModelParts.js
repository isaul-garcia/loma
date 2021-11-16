import React, { useRef, useState } from "react";
import { useGLTF } from '@react-three/drei';
import { proxy, useSnapshot } from "valtio";

import "../../styles.css";

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

function ModelParts({props, chair, plasticTop, meshTop, plasticBottom, meshBottom,
  flatTop, flatBottom, floor, softTop, softBottom, tall}) {
  const group = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('all-loma.glb')
  const [hovered, set] = useState(null)
  return (
    <>
    <group 
      ref={group} {...props} 
      dispose={null}>
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

export default ModelParts;