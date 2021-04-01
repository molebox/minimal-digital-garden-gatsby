import React from "react";
import { useClipboard } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Plane from "../../assets/plane";

export default function Email({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button
      color="brand.lightGrey"
      aria-label="Copy Email"
      textTransform="uppercase"
      fontWeight={600}
      role="button"
      onClick={onCopy}
    >
      <Plane/>
    </Button>
  );
}
