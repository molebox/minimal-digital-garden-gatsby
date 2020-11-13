import React from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

/**
 * A single 3D cube
 */
const Cube = ({ position, imagePath }) => {
  const [image] = useTexture(imagePath);
  const [color, setColor] = React.useState("");

  const [ref] = useBox(() => ({
    mass: 0.5,
    position,
    rotation: [0.2, 0.5, 0.4],
    args: [1, 1, 1],
  }));

  React.useEffect(() => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    const interval = setTimeout(() => {
      setColor(`rgb(${r},${g},${b})`);
    }, 800);

    return () => clearTimeout(interval);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial
        attach="material"
        map={image}
        color={color}
        shininess={600}
      />
    </mesh>
  );
};

export default Cube;
