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
          position: [2, 6, 3], // x, y, z
          fov: 75, // Field of view, the higher the number the further away the camera
        }}
        pixelRatio={typeof window !== undefined ? window.devicePixelRatio * 1.5 : null}
      >
        <Suspense fallback={<Spinner size="xl" />}>
          {/* <pointLight position={[-10, -10, 30]} intensity={0.25} />
          <spotLight
            intensity={0.2}
            position={[20, 25, 14]}
            angle={0.15}
            penumbra={1}
            castShadow
          /> */}
          {/* {/* <pointLight position={[-10, -10, 30]} intensity={0.25} /> */}
          <pointLight position={[-10, -10, 30]} intensity={0.25} />
        {/* <spotLight intensity={0.3} position={[25, 30, 20]} angle={0.2} penumbra={1} castShadow /> */}
          {/* <hemisphereLight intensity={0.1} /> */}
          {/* <spotLight
            position={[10, 15, 5]}
            angle={0.8}
            penumbra={1}
            intensity={1.5}
            castShadow
          /> */}
          <Physics>
            <Plane />
            <Cube imagePath={["/Letter_D.png"]} position={[-5, 11, -3]} />
            <Cube imagePath={["/Letter_I.png"]} position={[-2, 11, -3]} />
            <Cube imagePath={["/Letter_G.png"]} position={[-1, 10, -3]} />
            <Cube imagePath={["/Letter_I.png"]} position={[0, 9, -3]} />
            <Cube imagePath={["/Letter_T.png"]} position={[1, 8, -3]} />
            <Cube imagePath={["/Letter_A.png"]} position={[2, 7, -3]} />
            <Cube imagePath={["/Letter_L.png"]} position={[3, 8, -3]} />

            <Cube imagePath={["/Letter_G.png"]} position={[-3, 8, 2]} />
            <Cube imagePath={["/Letter_A.png"]} position={[-2, 6, 2]} />
            <Cube imagePath={["/Letter_R.png"]} position={[0, 5, 2]} />
            <Cube imagePath={["/Letter_D.png"]} position={[1, 4, 2]} />
            <Cube imagePath={["/Letter_E.png"]} position={[3, 3, 2]} />
            <Cube imagePath={["/Letter_N.png"]} position={[4, 2, 2]} />
          </Physics>
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Cubes;
