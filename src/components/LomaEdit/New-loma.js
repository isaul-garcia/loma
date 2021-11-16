import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/new-loma.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.PlasticBottom.geometry}
        material={nodes.PlasticBottom.material}
        position={[0.02, 0.52, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.PlasticTop.geometry}
        material={nodes.PlasticTop.material}
        position={[0.02, 0.61, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.MeshTop.geometry}
        material={nodes.MeshTop.material}
        position={[0.02, 0.61, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.MeshBottom.geometry}
        material={nodes.MeshBottom.material}
        position={[0.02, 0.52, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.FlatTop.geometry}
        material={nodes.FlatTop.material}
        position={[0.02, 0.58, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.FlatBottom.geometry}
        material={nodes.FlatBottom.material}
        position={[0.02, 0.49, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.Base.geometry}
        material={materials.Floor}
        position={[0.02, 0.49, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.ShortChair.geometry}
        material={nodes.ShortChair.material}
        position={[0.02, 0.49, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.TextileTop.geometry}
        material={nodes.TextileTop.material}
        position={[0.02, 0.49, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.TextileBottom.geometry}
        material={nodes.TextileBottom.material}
        position={[0.02, 0.49, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
      <mesh
        geometry={nodes.TallChair.geometry}
        material={nodes.TallChair.material}
        position={[0.02, 0.49, -0.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
    </group>
  )
}
