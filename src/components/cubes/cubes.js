import React, { Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/core";
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
 * A set of 3D cubes which spell out "Digital Garden"
 */
const Cubes = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => setHasMounted(true), []);

  return (
    <Box
      w={["500px", "1000px"]}
      h={600}
      m="0 auto"
      bgColor="brand.bg"
      p={2}
      mt={6}
    >
      {hasMounted && (
        <Canvas
          colorManagement
          shadowMap
          camera={{
            position: [2, 7, 3], // x, y, z
            fov: 65, // Field of view, the higher the number the further away the camera
          }}
        >
          <Suspense fallback={<Spinner size="xl" />}>
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

              <Cube imagePath={[G]} position={[-2, 7, 2]} />
              <Cube imagePath={[A]} position={[-1, 6, 2]} />
              <Cube imagePath={[R]} position={[0, 5, 2]} />
              <Cube imagePath={[D]} position={[1, 4, 2]} />
              <Cube imagePath={[E]} position={[3, 3, 2]} />
              <Cube imagePath={[N]} position={[4, 2, 2]} />
            </Physics>
          </Suspense>
        </Canvas>
      )}
    </Box>
  );
};

export default Cubes;
