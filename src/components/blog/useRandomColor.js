import React from "react";

export const useRandomColor = () => {
  const [hovered, setHover] = React.useState(false);
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    setColor(`rgb(${r},${g},${b})`);
  }, [hovered]);

  return { setHover, color, hovered };
};
