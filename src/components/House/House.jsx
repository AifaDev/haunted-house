import Bushes from "./Bushes";
import Door from "./Door";
import Lantern from "./Lantern";
import Roof from "./Roof";
import Walls from "./Walls";

export default function House(props) {
  return (
    <group {...props}>
      <Roof castShadow position={[0, 14, 0]} />
      <Walls castShadow receiveShadow />
      <Door castShadow position={[0, -2.5, 12.51]} />
      <Bushes castShadow position={[0, -9, 12.5]} />
      <Lantern
        castShadow
        rotation-y={-Math.PI * 0.5}
        scale={0.08}
        position={[0, 0, 15.7]}
      />
    </group>
  );
}
