import React, { Suspense } from "react";
import gsap from "gsap";
import { Flex, Grid, Spinner } from "@chakra-ui/core";
import NavigationLink from "./navigation-link";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "react-three-fiber";
import { lazy } from "@loadable/component";
import { Html, useProgress } from "@react-three/drei";

//  Stork = lazy(() => import("../bird/stork"));
// import Stork from "./../bird/stork";

const Header = ({ prev, next, ...rest }) => {
  const headerRef = React.useRef(null);

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

  return isBrowser ? (
    <Grid
      as="header"
      templateColumns={["1fr 1fr 1fr"]}
      autoRows="auto"
      // templateRows={["repeat(3, 1fr)", "1fr"]}
      w="100%"
      justify="space-evenly"
      align="center"
      bg="rgba(255,255,255, 0.9)"
      ref={headerRef}
      position="sticky"
      top={0}
      h={100}
      zIndex={999}
      overflowX="hidden"
      {...rest}
    >
      {/* <Flex gridColumn={1} gridRow={1} w={["100%", "250px"]} h="80px">
        <NavigationLink to="/"></NavigationLink>
          <Canvas colorManagement>
            <Suspense
              fallback={null}
            >
              <Stork position={[10, 10, 100]} />
            </Suspense>
          </Canvas>
        </NavigationLink>
      </Flex> */}

      <Flex
        gridColumn={1}
        gridRow={1}
        alignItems="center"
        justifyContent="center"
      >
        <NavigationLink to="/">home</NavigationLink>
      </Flex>

      <Flex
        gridColumn={2}
        // gridRow={[2, 1]}
        alignItems="center"
        justifyContent="center"
      >
        {prev && prev === false
          ? null
          : prev && (
              <NavigationLink to={prev.fields.slug}>previous</NavigationLink>
            )}
      </Flex>
      <Flex
        gridColumn={3}
        // gridRow={[3, 1]}
        alignItems="center"
        justifyContent="center"
      >
        {next && next === false
          ? null
          : next && <NavigationLink to={next.fields.slug}>next</NavigationLink>}
      </Flex>
    </Grid>
  ) : null;
};

export default Header;
