import React, { Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/core";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Plane from "./plane";
import Cube from "./cube";
import { setMatchPaths } from "./../../../.cache/find-path";

/**
 * A set of 3D cubes which spell out "Digital Garden"
 */
const Cubes = () => {
  let pixelRatio = undefined;

  React.useEffect(() => {
    if (typeof window !== undefined) {
      pixelRatio = window.devicePixelRatio * 1.5;
    }
  }, []);

  return (
    <Box
      w={["350px", "1000px"]}
      h={["300px", "600px"]}
      m="0 auto"
      bgColor="brand.bg"
      p={2}
      mt={6}
    >
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [2, 4, 5], // x, y, z
          // fov: 75, // Field of view, the higher the number the further away the camera
          zoom: 1,
        }}
        pixelRatio={pixelRatio}
        concurrent
      >
        <Suspense fallback={<Spinner size="xl" />}>
          <spotLight
            intensity={0.3}
            position={[25, 30, 20]}
            angle={0.2}
            penumbra={1}
            castShadow
          />
          <hemisphereLight intensity={1} />
          <Physics>
            <Plane />
            <Cube imagePath={["/D.jpg"]} position={[-5, 11, -3]} />
            <Cube imagePath={["/I.jpg"]} position={[-2, 11, -3]} />
            <Cube imagePath={["/G.jpg"]} position={[-1, 10, -3]} />
            <Cube imagePath={["/I.jpg"]} position={[0, 9, -3]} />
            <Cube imagePath={["/T.jpg"]} position={[1, 8, -3]} />
            <Cube imagePath={["/A.jpg"]} position={[2, 7, -3]} />
            <Cube imagePath={["/L.jpg"]} position={[3, 8, -3]} />

            <Cube imagePath={["/G.jpg"]} position={[-3, 8, 2]} />
            <Cube imagePath={["/A.jpg"]} position={[-2, 6, 2]} />
            <Cube imagePath={["/R.jpg"]} position={[0, 5, 2]} />
            <Cube imagePath={["/D.jpg"]} position={[1, 4, 2]} />
            <Cube imagePath={["/E.jpg"]} position={[3, 3, 2]} />
            <Cube imagePath={["/N.jpg"]} position={[4, 2, 2]} />
          </Physics>
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Cubes;
