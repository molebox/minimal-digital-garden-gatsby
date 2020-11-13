import React from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

/**
 * A single 3D cube
 */
const Cube = ({ position, imagePath }) => {
  const [image] = useTexture(imagePath);
  const imageRef = React.useRef();
  const [ref] = useBox(() => ({
    mass: 1,
    position,
    rotation: [0.2, 0.5, 0.4],
    args: [1, 1, 1],
  }));

  React.useEffect(() => {
    image.magFilter = THREE.LinearMipmapNearestFilter;
  }, []);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* <meshBasicMaterial>
          <texture
            {...image}
            attach="map"
            // magFilter={THREE.NearestMipMapLinearFilter}
            minFilter={THREE.LinearMipmapLinearFilter}
            ref={imageRef}
          />
        </meshBasicMaterial> */}
      <meshStandardMaterial attach="material" map={image} color="#fff" />
    </mesh>
  );
};

export default Cube;
