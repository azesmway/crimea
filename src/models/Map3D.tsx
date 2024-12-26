import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export default function Model(props: any) {
  // @ts-ignore
  const { nodes, materials } = useGLTF(require('assets/models/Map.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.lambert5SG}
      />

      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.lambert6SG}
      />
    </group>
  )
}

useGLTF.preload(require('assets/models/Map.glb'))
