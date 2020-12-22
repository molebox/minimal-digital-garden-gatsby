/** @jsx jsx */
import { jsx } from "theme-ui";
import useClipboard from "react-use-clipboard";

export default function CopyButton({ value }) {
  const { isCopied, setCopied } = useClipboard(value);
  return (
    <button
      sx={{
        color: "lightGrey",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
      aria-label="Copy text"
      role="button"
      onClick={setCopied}
    >
      {isCopied ? "Yay!" : "Grab It"}
    </button>
  );
}
