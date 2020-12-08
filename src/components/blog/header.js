import React from "react";
import gsap from "gsap";
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import NavigationLink from "./navigation-link";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = ({ previous, next, ...rest }) => {
  const headerRef = React.useRef(null);
  const bg = useColorModeValue("rgba(255,255,255, 0.9)", "dark.bg");

  const isBrowser = typeof window !== undefined;

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
            start: "center center",
          },
          opacity: 1,
          duration: 1.2,
          y: 0,
          delay: 1,
        }
      );
    }
  }, []);

  return isBrowser ? (
    <Grid
      as="header"
      templateColumns={["1fr 1fr 1fr"]}
      autoRows="auto"
      w="100%"
      justify="space-evenly"
      align="center"
      bg={bg}
      ref={headerRef}
      position="sticky"
      top={0}
      h={100}
      zIndex={999}
      overflowX="hidden"
      {...rest}
    >
      <Flex
        gridColumn={1}
        gridRow={1}
        alignItems="center"
        justifyContent="center"
      >
        <NavigationLink to="/">home</NavigationLink>
      </Flex>

      <Flex gridColumn={2} alignItems="center" justifyContent="center">
        {previous !== null ? (
          <NavigationLink to={`/${previous.slug}`}>previous</NavigationLink>
        ) : null}
      </Flex>
      <Flex gridColumn={3} alignItems="center" justifyContent="center">
        {next !== null ? (
          <NavigationLink to={`/${next.slug}`}>next</NavigationLink>
        ) : null}
      </Flex>
    </Grid>
  ) : null;
};

export default Header;
