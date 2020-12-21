import { wrapRootElement as wrap } from './root-wrapper';

import React from "react"
import { ColorModeScript } from "@chakra-ui/react"

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents  }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://indestructibletype.com/fonts/Jost.css"
      type="text/css"
      charset="utf-8"
    />
  ]);
  setPreBodyComponents([
    <ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />,
  ]);
}

export const wrapRootElement = wrap