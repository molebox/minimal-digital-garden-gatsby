/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

const ModeButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      sx={{
        transition: "all .25s ease-in-out",
        boxShadow: "-5px 5px #000",
        _active: {
          boxShadow: "-2px 2px #000",
          transform: "translate(-2px, 2px)",
        },
        _hover: {
          boxShadow: "-2px 2px #000",
          transform: "translate(-2px, 2px)",
        },
        position: "relative",
        gridColumn: ["1 / 4", 3],
        gridRow: [2, 1],
        margin: ["30px 0 0 100px", "0 40px 0 0"],
      }}
    >
      <button
        sx={{
          background: "bg",
          px: 2,
          borderRadius: 0,
          textTransform: "uppercase",
          fontSize: "14px",
        }}
        onClick={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
      >
        {colorMode === "default" ? " Like it Mustard?" : "Like it Clean?"}
      </button>
    </div>
  );
};

export default ModeButton;
