import "./App.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import House from "./components/House/House";
import Graves from "./components/Graves";
import Ghosts from "./components/Ghosts";

function App() {
  return (
    <div className="App">
      <Canvas
        className="canvas"
        style={{ background: "black" }}
        shadows
        onDoubleClick={(e) => {
          e.target.requestFullscreen();
        }}
      >
        <House position={[0, 10, 0]} />
        <Floor />
        <Graves />
        <Ghosts />
        <directionalLight castShadow intensity={0.01} />
        <PerspectiveCamera makeDefault position={[0, 25, 90]} fov={75} />
        <OrbitControls
          enableDamping
          enablePan={false}
          maxPolarAngle={Math.PI * 0.49}
          minDistance={35}
          maxDistance={120}
          makeDefault
        />
        <ambientLight args={["white", 0.03]} />
      </Canvas>
    </div>
  );
}
export default App;
