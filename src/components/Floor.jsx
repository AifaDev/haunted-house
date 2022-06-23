import { Plane, useTexture } from "@react-three/drei";
import map from "./textures/grass/color.jpg";
import normalMap from "./textures/grass/normal.jpg";
import aoMap from "./textures/grass/ambientOcclusion.jpg";
import * as THREE from "three";

export default function Floor(props) {
  const textureProps = useTexture({
    map,
    normalMap,
    aoMap,
  });

  textureProps.map.wrapS = THREE.RepeatWrapping;
  textureProps.map.wrapT = THREE.RepeatWrapping;
  textureProps.map.repeat.set(6, 6);
  // textureProps.map.offset = 1;

  textureProps.normalMap.wrapS = THREE.RepeatWrapping;
  textureProps.normalMap.wrapT = THREE.RepeatWrapping;
  textureProps.normalMap.repeat.set(6, 6);

  // textureProps.roughnessMap.offset = 0.5;

  textureProps.aoMap.wrapS = THREE.RepeatWrapping;
  textureProps.aoMap.wrapT = THREE.RepeatWrapping;
  textureProps.aoMap.repeat.set(6, 6);
  // textureProps.aoMap.offset = 0.5;

  return (
    <Plane
      receiveShadow
      {...props}
      rotation-x={-Math.PI * 0.5}
      args={[300, 300]}
    >
      <meshStandardMaterial
        // roughness={0}
        normalScale={[0.1, 0.1]}
        {...textureProps}
      />
    </Plane>
  );
}
