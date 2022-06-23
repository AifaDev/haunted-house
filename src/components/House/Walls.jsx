import { Box, useTexture } from "@react-three/drei";
import map from "../textures/bricks/color.jpg";
import normalMap from "../textures/bricks/normal.jpg";
import roughnessMap from "../textures/bricks/roughness.jpg";
import aoMap from "../textures/bricks/ambientOcclusion.jpg";

export default function Walls(props) {
  const textureProps = useTexture({
    map,
    normalMap,
    roughnessMap,
    aoMap,
  });

  return (
    <Box args={[30, 20, 25]} {...props}>
      <meshStandardMaterial normalScale={[0.1, 0.1]} {...textureProps} />
    </Box>
  );
}
