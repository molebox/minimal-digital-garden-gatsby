import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/core";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Plane from "./plane";
import Cube from "./cube";
import { Html } from "@react-three/drei";

import A from "./letters/A.png";
import D from "./letters/D.png";
import E from "./letters/E.png";
import G from "./letters/G.png";
import I from "./letters/I.png";
import L from "./letters/L.png";
import N from "./letters/N.png";
import R from "./letters/R.png";
import T from "./letters/T.png";

/**
 * A set of 3D cubes which spell out "Digital Garden"
 */
const Cubes = () => {
  const pixelRatio = React.useRef();

  React.useEffect(() => {
    if (typeof window !== undefined) {
      pixelRatio.current = window.devicePixelRatio * 1.5;
    }
  }, []);

  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [2, 6, 5], // x, y, z
          // fov: 75, // Field of view, the higher the number the further away the camera
          zoom: 1.5,
        }}
        pixelRatio={pixelRatio.current}
        concurrent
      >
        <Suspense
          fallback={
            <Html center>
              <Spinner />
            </Html>
          }
        >
          <directionalLight
            intensity={("#fff", 0.5)}
            position={[10, 20, 10]}
            castShadow
          />
          <ambientLight intensity={0.8} />
          <hemisphereLight intensity={1} />
          <Physics>
            <Plane />
            <Cube imagePath={[D]} position={[-5, 11, -3]} />
            <Cube imagePath={[I]} position={[-2, 11, -3]} />
            <Cube imagePath={[G]} position={[-1, 10, -3]} />
            <Cube imagePath={[I]} position={[0, 9, -3]} />
            <Cube imagePath={[T]} position={[1, 8, -3]} />
            <Cube imagePath={[A]} position={[2, 7, -3]} />
            <Cube imagePath={[L]} position={[3, 8, -3]} />

            <Cube imagePath={[G]} position={[-3, 8, 2]} />
            <Cube imagePath={[A]} position={[-2, 6, 2]} />
            <Cube imagePath={[R]} position={[0, 5, 2]} />
            <Cube imagePath={[D]} position={[1, 4, 2]} />
            <Cube imagePath={[E]} position={[3, 3, 2]} />
            <Cube imagePath={[N]} position={[4, 2, 2]} />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Cubes;
