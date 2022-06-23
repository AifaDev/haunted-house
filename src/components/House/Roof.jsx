import { Cone } from "@react-three/drei";

export default function Roof(props) {
  const materialProps = {
    opacity: 1,
    roughness: 1,
    metalness: 0.1,
    color: "#b35f45",
  };
  return (
    <Cone args={[25, 8, 4]} rotation-y={Math.PI * 0.25} {...props}>
      <meshStandardMaterial {...materialProps} />
    </Cone>
  );
}
