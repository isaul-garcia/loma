import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { proxy, useSnapshot } from "valtio";

import model from '../../assets/this-loma.glb';

import "../../styles.css";

const state = proxy({
  current: null,
  items: {
    Legs: '#0ff',
    Floor: '#ff0',
    Bottom: '#f0f',
    Top: '#00f',
    Left: '#0f0',
    Right: '#f00'
  }
});

export default function ModelParts({ props, chair, plasticTop, meshTop, plasticBottom, meshBottom,
  flatTop, flatBottom, floor, softTop, softBottom, tall, snap }) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model);
  const [hovered, set] = useState(null)
  return (
    <>
      <group
        ref={group} {...props}
        dispose={null}
        onPointerMissed={(e) => (state.current = null)}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
      >
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

useGLTF.preload("/this-loma.glb");