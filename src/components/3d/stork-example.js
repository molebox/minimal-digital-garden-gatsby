import React from "react";
import Stork from "../bird/stork";
import CanvasContainer from "./canvas-container";

const StorkExample = () => {
  return (
    <CanvasContainer
      width="300px"
      height="auto"
      m="0 auto"
      position={[0, 0, 3]}
      fov={80}
    >
      <Stork />
    </CanvasContainer>
  );
};

export default StorkExample;
