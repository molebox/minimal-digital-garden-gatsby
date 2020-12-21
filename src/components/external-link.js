import React from "react";
import { Link, VisuallyHidden } from "@chakra-ui/react";

const ExternalLink = ({ icon, name, href, ...rest }) => (
  <Link
    fontSize="xl"
    fontWeight={500}
    fontFamily="heading"
    color="brand.black"
    my={5}
    href={href}
    isExternal
    {...rest}
  >
    <VisuallyHidden>{name}</VisuallyHidden>
    {icon}
  </Link>
);

export default ExternalLink;
