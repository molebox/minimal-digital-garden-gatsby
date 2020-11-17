import React, { Suspense } from "react";
import { Box, Text } from "@chakra-ui/core";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Plane from "./plane";
import Cube from "./cube";
import { Loader } from "@react-three/drei";

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
          <Suspense fallback={null}>
            <directionalLight
              intensity={("#fff", 0.5)}
              position={[10, 20, 10]}
              castShadow
            />
            <ambientLight intensity={0.8} />
            <hemisphereLight intensity={1} />
            <Physics>
              <Plane />
              <Cube imagePath={["/D.png"]} position={[-5, 11, -3]} />
              <Cube imagePath={["/I.png"]} position={[-2, 11, -3]} />
              <Cube imagePath={["/G.png"]} position={[-1, 10, -3]} />
              <Cube imagePath={["/I.png"]} position={[0, 9, -3]} />
              <Cube imagePath={["/T.png"]} position={[1, 8, -3]} />
              <Cube imagePath={["/A.png"]} position={[2, 7, -3]} />
              <Cube imagePath={["/L.png"]} position={[3, 8, -3]} />

              <Cube imagePath={["/G.png"]} position={[-3, 8, 2]} />
              <Cube imagePath={["/A.png"]} position={[-2, 6, 2]} />
              <Cube imagePath={["/R.png"]} position={[0, 5, 2]} />
              <Cube imagePath={["/D.png"]} position={[1, 4, 2]} />
              <Cube imagePath={["/E.png"]} position={[3, 3, 2]} />
              <Cube imagePath={["/N.png"]} position={[4, 2, 2]} />
            </Physics>
          </Suspense>
        </Canvas>
      </Box>
      <Loader
        containerStyles={{ background: "white", margin: "0 auto" }}
        dataStyles={{ color: "#1f2127" }}
        dataInterpolation={(p) => (
          <Text fontFamily="heading" fontSize="md">
            Planting seeds... {p.toFixed(2)}%
          </Text>
        )}
      />
    </>
  );
};

export default Cubes;
