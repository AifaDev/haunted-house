import { Box } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

export default function Graves(props) {
  const materialProps = {
    opacity: 1,
    roughness: 1,
    metalness: 0.1,
  };
  const [material, setMaterial] = useState();

  return (
    <>
      <meshStandardMaterial
        color={"#727272"}
        ref={setMaterial}
        side={THREE.DoubleSide}
        {...materialProps}
      />
      <group>
        {new Array(200).fill(0).map((e, index) => {
          let rotationX = (Math.random() - 0.5) * 0.4;
          let rotationY = (Math.random() - 0.5) * 0.4;

          let randomX = Math.cos(Math.random() * Math.PI) * 100;
          let randomZ = Math.cos(Math.random() * Math.PI) * 100;
          if (Math.abs(randomX) < 15 && Math.abs(randomZ) < 12.5) {
            if (randomZ < 0) randomZ -= 15;
            else randomZ += 30;
          }

          return (
            <Box
              rotation={[rotationX, rotationY, 0]}
              key={index}
              position={[randomX, 0, randomZ]}
              castShadow
              args={[5, 10, 1]}
              material={material}
            />
          );
        })}
      </group>
    </>
  );
}
