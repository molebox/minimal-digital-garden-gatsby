/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

import { RoughNotation } from "react-rough-notation";
import ModeButton from "./mode-button";
import ExternalLink from "./../external-link";
import Github from "../../assets/github";
import Twitter from "../../assets/twitter";

const Subtitle = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <section
      sx={{
        display: "grid",
        templateColumns: "max-content auto 100px 50px 50px",
        templateRows: "auto",
        width: "100%",
        placeItems: "center",
        my: 4,
      }}
    >
      <RoughNotation
        type="underline"
        strokeWidth={2}
        color="#000"
        show={!isDarkMode}
      >
        <div
          sx={{
            gridColumn: 1,
            bgColor: "textBox",
            height: "min-content",
            mt: [2, 5],
            px: 2,
            transform: isDarkMode ? "rotate(5deg)" : null,
          }}
        >
          <p
            sx={{
              fontSize: ["16px", "20px"],
              fontWeight: 500,
              fontFamily: "heading",
              color: "pText",
            }}
          >
            By Rich Haines
          </p>
        </div>
      </RoughNotation>

      <ModeButton />
      <ExternalLink
        icon={<Github />}
        href="https://github.com/molebox"
        gridColumn={4}
        name="Github link"
      />
      <ExternalLink
        icon={<Twitter />}
        href="https://twitter.com/studio_hungry"
        gridColumn={5}
        name="Twitter link"
      />
    </section>
  );
};

export default Subtitle;
