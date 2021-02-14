import React from "react";
import { Flex, Link } from "@chakra-ui/react";

const ShareOnTwitter = () => {
  return (
    <Flex>
      <Link
        as="a"
        isExternal
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-text="Just read this awesome article"
        data-via="studio_hungry"
        data-lang="en"
        data-show-count="false"
      >
        Share on Twitter
      </Link>
    </Flex>
  );
};

export default ShareOnTwitter;
