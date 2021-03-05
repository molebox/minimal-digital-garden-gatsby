import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { Flex, Grid, Spacer } from "@chakra-ui/react";
import TypeScript from "./../../assets/typescript";
import JavaScript from "./../../assets/javascript";
import Bash from "./../../assets/bash";
import ReactSVG from "./../../assets/react-svg";
import CopyButton from "./copy-button";
import HTML from "../../assets/html";
import CSS from "./../../assets/css";
import SQL from "./../../assets/sql";
import JSON from "./../../assets/json";
import Prisma from "./../../assets/prisma";
import Git from "./../../assets/git";

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, "");

  const showLanguage = () => {
    switch (language) {
      case "typescript":
        return <TypeScript />;
      case "javascript":
        return <JavaScript />;
      case "js":
        return <JavaScript />;
      case "bash":
        return <Bash />;
      case "jsx":
        return <ReactSVG />;
      case "html":
        return <HTML />;
      case "css":
        return <CSS />;
      case "sql":
        return <SQL />;
      case "json":
        return <JSON />;
      case "prisma":
        return <Prisma />;
      case "diff" || "git":
        return <Git />;
      default:
        break;
    }
  };

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Flex position="relative" direction="column" my={6}>
          <Grid
            h="50px"
            bg="brand.darkGrey"
            mb="-20px"
            borderTop="solid 2px"
            borderTopColor="brand.black"
            borderLeft="solid 2px"
            borderLeftColor="brand.black"
            borderRight="solid 2px"
            borderRightColor="brand.black"
            borderBottom="solid 1px"
            borderBottomColor="brand.black"
            templateColumns="auto 100px 80px"
            alignItems="center"
            justifyItems="center"
          >
            <Spacer />
            {showLanguage()}
            <CopyButton value={children.trim()} />
          </Grid>
          <pre
            className={className}
            style={{
              ...style,
              overflow: "scroll",
              overflowY: "hidden",
              marginTop: 20,
              marginBottom: 20,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              position: "relative",
              borderBottom: "solid 2px",
              borderLeft: "solid 2px",
              borderRight: "solid 2px",
              borderBottomColor: "#000000",
              borderLeftColor: "#000000",
              borderRightColor: "#000000",
              backgroundColor: "#1f2127",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </Flex>
      )}
    </Highlight>
  );
};

export default Code;
