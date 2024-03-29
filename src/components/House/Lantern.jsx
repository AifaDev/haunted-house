/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Sugarloaf (https://sketchfab.com/Sugarloaf)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/lantern-fed9eb3c1dd74e839056f29ec4667e52
title: Lantern
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

export default function Lantern({ ...props }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.material.emissive = new THREE.Color("#ffffff");
  }, []);
  const group = useRef();
  const { nodes, materials } = useGLTF("lantern.gltf");
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-0.83, -0.9, 0.8]}
              rotation={[-Math.PI / 2, 0, 1.66]}
              scale={79.24}
            >
              <mesh
                geometry={nodes.Sphere003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                ref={ref}
                geometry={nodes.Sphere003_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                geometry={nodes.Sphere003_Material002_0.geometry}
                material={materials["Material.002"]}
              />
            </group>
          </group>
        </group>
      </group>
      <pointLight
        castShadow
        args={["white", 1, 30, 1.2]}
        power={10}
        position={[0, 6.5, 15]}
      />
    </>
  );
}

useGLTF.preload("lantern.gltf");
