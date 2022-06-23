import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Ghosts(props) {
  const group = useRef();
  useFrame(({ clock }) => {
    const lights = group.current.children;
    lights[0].position.x = Math.cos(clock.getElapsedTime()) * 65;
    lights[0].position.z = Math.sin(clock.getElapsedTime()) * 65;
    lights[0].position.y = (Math.sin(clock.getElapsedTime()) - 0.5) * 5;

    lights[1].position.x = Math.sin(clock.getElapsedTime()) * 65;
    lights[1].position.z = Math.cos(clock.getElapsedTime()) * 65;
    lights[1].position.y = (Math.cos(clock.getElapsedTime()) - 0.5) * 5;

    lights[2].position.x = -Math.abs(Math.sin(clock.getElapsedTime())) * 65;
    lights[2].position.z = Math.cos(clock.getElapsedTime()) * 40;
    lights[2].position.y = Math.sin(clock.getElapsedTime() * 4) * 5;
  });

  return (
    <group ref={group} rotation-y={Math.PI * 0.5}>
      <pointLight
        castShadow
        args={["red", 1, 30, 1.4]}
        power={10}
        position={[50, 10, 50]}
      />
      <pointLight
        castShadow
        args={["#DBA800", 1, 30, 1.4]}
        power={10}
        position={[0, 10, -50]}
      />
      <pointLight
        castShadow
        args={["green", 1, 30, 1.4]}
        power={10}
        position={[-50, 10, 50]}
      />
    </group>
  );
}
