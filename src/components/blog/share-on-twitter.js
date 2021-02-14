import React from "react";
import { Flex } from "@chakra-ui/react";
import { TwitterShareButton } from "react-share";

const ShareOnTwitter = ({ slug }) => {
  return (
    <Flex>
      <TwitterShareButton
        round={false}
        size={32}
        url={`https://richardhaines.dev/${slug}`}
      />
    </Flex>
  );
};

export default ShareOnTwitter;
