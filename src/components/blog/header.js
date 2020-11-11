import React from "react";
import gsap from "gsap";
import { Flex } from "@chakra-ui/core";
import NavigationLink from "./navigation-link";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = ({ prev, next }) => {
  const headerRef = React.useRef(null);
  React.useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -100 },
        {
          scrollTrigger: {
            trigger: headerRef.current,
            toggleActions: "restart none none none",
            start: "top center",
          },
          opacity: 1,
          duration: 1.2,
          y: 0,
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <Flex
      as="header"
      direction={["column", "row"]}
      w="100%"
      justify="space-evenly"
      align="center"
      bgColor="brand.bg"
      ref={headerRef}
      position="sticky"
      top={0}
      h={100}
      zIndex={999}
      overflowX="hidden"
    >
      <NavigationLink to="/">Start</NavigationLink>
      {prev === false
        ? null
        : prev && (
            <NavigationLink to={prev.fields.slug}>
              {prev.fields.slug.replace(/^\/|\/$/g, "")}
            </NavigationLink>
          )}
      {next === false
        ? null
        : next && (
            <NavigationLink to={next.fields.slug}>
              {next.fields.slug.replace(/^\/|\/$/g, "")}
            </NavigationLink>
          )}
    </Flex>
  );
};

export default Header;
