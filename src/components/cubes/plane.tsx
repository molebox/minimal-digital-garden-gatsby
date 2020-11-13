import React from "react";
import { usePlane } from "@react-three/cannon";

/**
 * The plane which the cubes fall onto
 */
const Plane = () => {
  // We rotate the plane so that its like a wall seeing as we are sending the cubes down from above
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]}/>
      <shadowMaterial attach="material" opacity={0.5}/>
    </mesh>
  );
};

export default Plane;
