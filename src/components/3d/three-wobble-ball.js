import React from "react";
import { MeshWobbleMaterial, Sphere } from "@react-three/drei";
import CanvasContainer from "./canvas-container";

const ThreeBallWobble = () => {
  return (
    <CanvasContainer
      width="300px"
      height="500px"
      m="0 auto"
      position={[0, 0, 7]}
      fov={70}
    >
      {/*An ambient light that creates a soft light against the object */}
      <ambientLight intensity={0.8} />
      {/*An directional light which aims form the given position */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* We can use the drei Sphere which has a simple API. This sphere has a wobble material attached to it */}
      <Sphere visible position={[0, 0, 2]} args={[1, 16, 200]}>
        <MeshWobbleMaterial
          attach="material"
          color="#EB1E99"
          factor={2} // Strength, 0 disables the effect (default=1)
          speed={3} // Speed (default=1)
          roughness={0}
        />
      </Sphere>
    </CanvasContainer>
  );
};

export default ThreeBallWobble;
