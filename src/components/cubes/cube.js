import React from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useRandomColor } from "./../blog/useRandomColor";

/**
 * A single 3D cube
 */
const Cube = ({ position, imagePath }) => {
  const [image] = useTexture(imagePath);
  const { color, hovered, setHover } = useRandomColor();

  const [ref] = useBox(() => ({
    mass: 0.5,
    position,
    rotation: [0.2, 0.5, 0.4],
    args: [1, 1, 1],
  }));

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial
        attach="material"
        map={image}
        color={hovered ? color : "#f6f8fa"}
        shininess={600}
      />
    </mesh>
  );
};

export default Cube;
