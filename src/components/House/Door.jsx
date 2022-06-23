import { Plane, useTexture } from "@react-three/drei";

import map from "../textures/door/color.jpg";
import normalMap from "../textures/door/normal.jpg";
import roughnessMap from "../textures/door/roughness.jpg";
import aoMap from "../textures/door/ambientOcclusion.jpg";
import alphaMap from "../textures/door/alpha.jpg";
import metalnessMap from "../textures/door/metalness.jpg";
import displacementMap from "../textures/door/height.jpg";

export default function Door(props) {
  const textureProps = useTexture({
    map,
    normalMap,
    roughnessMap,
    aoMap,
    alphaMap,
    metalnessMap,
    displacementMap,
  });
  return (
    <Plane args={[13, 14, 100, 100]} {...props}>
      <meshStandardMaterial
        normalScale={[0.2, 0.2]}
        transparent
        displacementScale={0.5}
        {...textureProps}
      />
    </Plane>
  );
}
