/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'
import gsap from "gsap";
import NavigationLink from "./navigation-link";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = ({ previous, next, ...rest }) => {
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

  return (
    <header
      sx={{
        display: "grid",
        templateColumns: "repeat(3, 1fr)",
        autoRows: "auto",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "bg",
        opacity: 0.9,
        position: "sticky",
        top: 0,
        height: "100px",
        zIndex: 999,
        overflow: "hidden",
        ...rest,
      }}
      ref={headerRef}
    >
      <div
        sx={{
          gridColumn: 1,
          gridRow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavigationLink to="/">home</NavigationLink>
      </div>

      <div
        sx={{
          gridColumn: 2,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {previous !== null ? (
          <NavigationLink to={`/${previous.slug}`}>previous</NavigationLink>
        ) : null}
      </div>
      <div
        sx={{
          gridColumn: 3,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {next !== null ? (
          <NavigationLink to={`/${next.slug}`}>next</NavigationLink>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
