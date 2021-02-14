import { wrapRootElement as wrap } from './root-wrapper';

import React from "react"
import { ColorModeScript } from "@chakra-ui/react"

export const onRenderBody = ({ setPreBodyComponents, setPostBodyComponents  }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />
  ]);
  setPostBodyComponents([<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>]);

}

export const wrapRootElement = wrap