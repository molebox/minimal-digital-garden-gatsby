import React from 'react';
import Code from "../components/blog/code";
import { Image, Link } from "theme-ui";
import { RoughNotation } from "react-rough-notation";
import Layout from "../components/layout";

export default {
  code: (props) => <Code {...props} />,
  img: (props) => (
    <Image src={props.src} alt={props.alt} variant={props.variant} />
  ),
  a: (props) => (
    <RoughNotation multiline type="underline" color="#1f2127" show={true}>
      <Link href={props.href}>{props.children}</Link>
    </RoughNotation>
  ),
  wrapper: ({ children }) => {
    return <Layout>{children}</Layout>;
  },
};
