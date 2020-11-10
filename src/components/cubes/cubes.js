import React, {Suspense} from "react";
import { Box } from "@chakra-ui/core";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Plane from "./plane";
import Cube from "./cube";

import D from "./../../assets/letters/Letter_D.png";
import I from "./../../assets/letters/Letter_I.png";
import G from "./../../assets/letters/Letter_G.png";
import A from "./../../assets/letters/Letter_A.png";
import L from "./../../assets/letters/Letter_L.png";
import N from "./../../assets/letters/Letter_N.png";
import R from "./../../assets/letters/Letter_R.png";
import T from "./../../assets/letters/Letter_T.png";
import E from "./../../assets/letters/Letter_E.png";

/**
 * A set of 3D cubes which spell out "Trivia Game"
 */
const Cubes = () => {
  return (
    <Box
      maxW="1000px"
      w="100%"
      h={500}
      m="0 auto"
      bgColor="#ffffff"
      p={2}
      mt={6}
    >
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [0, 8, 4], // x, y, z
          fov: 57, // Field of view, the higher the number the further away the camera
        }}
      >
        <Suspense fallback={null}>
        <pointLight position={[-10, -10, 30]} intensity={0.25} />
        <spotLight
          intensity={0.2}
          position={[20, 25, 14]}
          angle={0.15}
          penumbra={1}
          castShadow
        />
        <Physics>
          <Plane />
          <Cube imagePath={[D]} position={[-5, 11, -3]} />
          <Cube imagePath={[I]} position={[-2, 11, -3]} />
          <Cube imagePath={[G]} position={[-1, 10, -3]} />
          <Cube imagePath={[I]} position={[0, 9, -3]} />
          <Cube imagePath={[T]} position={[1, 8, -3]} />
          <Cube imagePath={[A]} position={[2, 7, -3]} />
          <Cube imagePath={[L]} position={[3, 8, -3]} />

          <Cube imagePath={[G]} position={[-6, 7, 2]} />
          <Cube imagePath={[A]} position={[-2, 6, 2]} />
          <Cube imagePath={[R]} position={[-1, 5, 2]} />
          <Cube imagePath={[D]} position={[0, 4, 2]} />
          <Cube imagePath={[E]} position={[1, 3, 2]} />
          <Cube imagePath={[N]} position={[2, 2, 2]} />
        </Physics>
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Cubes;
