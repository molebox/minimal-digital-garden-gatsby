/** @jsx jsx */
import { jsx } from "theme-ui";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import TypeScript from "./../../assets/typescript";
import JavaScript from "./../../assets/javascript";
import Bash from "./../../assets/bash";
import ReactSVG from "./../../assets/react-svg";
import CopyButton from "./copy-button";
import HTML from "../../assets/html";
import CSS from "./../../assets/css";

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
        <div
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            my: 6,
          }}
        >
          <div
            sx={{
              height: "50px",
              background: "darkGrey",
              mb: "-20px",
              borderTop: "solid 2px",
              borderTopColor: "text",
              borderLeft: "solid 2px",
              borderLeftColor: "text",
              borderRight: "solid 2px",
              borderRightColor: "text",
              borderBottom: "solid 1px",
              borderBottomColor: "text",
              display: "grid",
              templateColumns: "auto 100px 80px",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div />
            {showLanguage()}
            <CopyButton value={children.trim()} />
          </div>
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
        </div>
      )}
    </Highlight>
  );
};

export default Code;
