/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 scene.gltf 
Author: Prakash.Chatterjee (https://sketchfab.com/Prakash.Chatterjee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tulsi-tree-on-a-cement-tub-29e20a3ac415461fa12930d04282163c
Title: Tulsi Tree on a cement tub
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tulsi_plant/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.004, -0.271, 0]} scale={0.011}>
        <mesh geometry={nodes.Object_8.geometry} material={materials.TULSI_TREE_BARK} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['tulsi-removebg-preview']} />
      </group>
      <group position={[-0.299, -0.307, 0.126]} rotation={[0, -Math.PI / 2, 0]} scale={0.001}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.TULSI_TREE_BARK} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['tulsi-removebg-preview']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[0, -0.466, 0]} scale={0.337} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material_1} position={[0, -0.314, 0]} scale={0.507} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
