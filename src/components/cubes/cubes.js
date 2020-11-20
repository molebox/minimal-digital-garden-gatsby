import React, { Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/core";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Plane from "./plane";
import Cube from "./cube";
import { Html, useTexture, useProgress } from "@react-three/drei";

import Letter_A from "./letters/A.png";
import Letter_D from "./letters/D.png";
import Letter_E from "./letters/E.png";
import Letter_G from "./letters/G.png";
import Letter_I from "./letters/I.png";
import Letter_L from "./letters/L.png";
import Letter_N from "./letters/N.png";
import Letter_R from "./letters/R.png";
import Letter_T from "./letters/T.png";

/**
 * A set of 3D cubes which spell out "Digital Garden"
 */
const Cubes = () => {
  const pixelRatio = React.useRef();
  const [A, D, E, G, I, L, N, R, T] = useTexture([
    Letter_A,
    Letter_D,
    Letter_E,
    Letter_G,
    Letter_I,
    Letter_L,
    Letter_N,
    Letter_R,
    Letter_T,
  ]);
  const { progress } = useProgress();

  React.useEffect(() => {
    console.log("cubes progress: ", progress);
  }, [progress]);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      pixelRatio.current = window.devicePixelRatio * 1.5;
    }
  }, []);

  return (
    <Box
      w={["350px", "1000px"]}
      h={["200px", "500px"]}
      m="0 auto"
      bgColor="brand.bg"
      p={2}
      mt={6}
    >
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
        <Suspense fallback={<Spinner />}>
          <directionalLight
            intensity={("#fff", 0.5)}
            position={[10, 20, 10]}
            castShadow
          />
          <ambientLight intensity={0.8} />
          <hemisphereLight intensity={1} />
          <Physics>
            <Plane />
            <Cube texture={D} position={[-5, 11, -3]} />
            <Cube texture={I} position={[-2, 11, -3]} />
            <Cube texture={G} position={[-1, 10, -3]} />
            <Cube texture={I} position={[0, 9, -3]} />
            <Cube texture={T} position={[1, 8, -3]} />
            <Cube texture={A} position={[2, 7, -3]} />
            <Cube texture={L} position={[3, 8, -3]} />

            <Cube texture={G} position={[-3, 8, 2]} />
            <Cube texture={A} position={[-2, 6, 2]} />
            <Cube texture={R} position={[0, 5, 2]} />
            <Cube texture={D} position={[1, 4, 2]} />
            <Cube texture={E} position={[3, 3, 2]} />
            <Cube texture={N} position={[4, 2, 2]} />
          </Physics>
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Cubes;
