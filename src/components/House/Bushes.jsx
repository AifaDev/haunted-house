import { Sphere } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

export default function Bushes(props) {
  const materialProps = {
    opacity: 1,
    roughness: 1,
    metalness: 0.1,
  };
  const [material, setMaterial] = useState();

  return (
    <group {...props}>
      <meshStandardMaterial
        color={"#89c854"}
        ref={setMaterial}
        side={THREE.DoubleSide}
        {...materialProps}
      />

      <Sphere position-x={7} args={[4, 32, 32]} material={material} />
      <Sphere
        position={[11.5, -0.5, 1]}
        args={[1.8, 32, 32]}
        material={material}
      />
      <Sphere position-x={-6} args={[3.5, 32, 32]} material={material} />
      <Sphere
        position={[-8, -0.5, 3]}
        args={[1.5, 32, 32]}
        material={material}
      />
    </group>
  );
}
