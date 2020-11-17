import React, { Suspense } from "react";
import gsap from "gsap";
import { Flex, Grid, Spinner, Text } from "@chakra-ui/core";
import NavigationLink from "./navigation-link";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "react-three-fiber";
import Stork from "../bird/stork";
import { Loader, useProgress } from "@react-three/drei";

const Header = ({ prev, next, Location }) => {
  const headerRef = React.useRef(null);
  const { active, progress, errors, item, loaded, total } = useProgress();
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

  // function Loader() {
  //   return (
  //     <Flex align="center" justify="center">
  //       <Spinner />
  //       <Text>{progress}%</Text>
  //     </Flex>
  //   );
  // }

  React.useEffect(() => console.log({ loaded }), [loaded]);

  return (
    <Grid
      as="header"
      templateColumns={["1fr", "250px auto 1fr 1fr"]}
      templateRows={["repeat(3, 1fr)", "1fr"]}
      w="100%"
      justify="space-evenly"
      align="center"
      bgColor="brand.bg"
      ref={headerRef}
      position="sticky"
      top={0}
      h={[200, 100]}
      zIndex={999}
      overflowX="hidden"
      mb={6}
    >
      <Flex gridColumn={1} gridRow={1} w={["100%", "250px"]} h="80px">
        <NavigationLink to="/">
          <Canvas colorManagement>
            <Suspense fallback={null}>
              <Stork position={[10, 10, 100]} />
            </Suspense>
          </Canvas>
        </NavigationLink>
        <Loader />
      </Flex>

      <Flex
        gridColumn={[1, 3]}
        gridRow={[2, 1]}
        alignItems="center"
        justifyContent="center"
      >
        {prev === false
          ? null
          : prev && (
              <NavigationLink to={prev.fields.slug}>
                {prev.fields.slug.replace(/^\/|\/$/g, "")}
              </NavigationLink>
            )}
      </Flex>
      <Flex
        gridColumn={[1, 4]}
        gridRow={[3, 1]}
        alignItems="center"
        justifyContent="center"
      >
        {next === false
          ? null
          : next && (
              <NavigationLink to={next.fields.slug}>
                {next.fields.slug.replace(/^\/|\/$/g, "")}
              </NavigationLink>
            )}
      </Flex>
    </Grid>
  );
};

export default Header;
