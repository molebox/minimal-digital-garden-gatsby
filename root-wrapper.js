import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ChakraProvider, Text, UnorderedList, ListItem, Image, Link } from "@chakra-ui/core";
import theme from './src/theme';
import Code from './src/components/blog/code';
import Layout from './src/components/layout';
import { RoughNotation } from 'react-rough-notation';
import { MDXEmbedProvider } from 'mdx-embed';
import ThreeBall from './src/components/3d/three-ball';
import ThreeBallWobble from './src/components/3d/three-wobble-ball';
import ThreeBallDistort from './src/components/3d/three-ball-distort';
import StorkExample from './src/components/3d/stork-example';

const components = {
  code: (props) => <Code {...props}/>,
  h1: (props) => (
    <Text fontSize="6xl" mb={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text fontSize="3xl" my={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text fontSize="2xl" my={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList my={2}>{props.children}</UnorderedList>,
  li: (props) => <ListItem fontFamily="body" fontSize="xl">{props.children}</ListItem>,
  p: (props) => <Text my={2} fontSize="xl" fontFamily="body">{props.children}</Text>,
  img: (props) => (
    <Image m="0 auto" src={props.src} alt={props.alt} boxSize={props.boxSize} />
  ),
  a: (props) => (
      <RoughNotation multiline type="underline" color="#1f2127" show={true}>
        <Link isExternal href={props.href}>
        {props.children}
        </Link>
      </RoughNotation>
  ),
  wrapper: ({children}) => {
    return (
      <Layout>
          {children}
      </Layout>
    )
  },
  ThreeBall,
  ThreeBallWobble,
  ThreeBallDistort,
  StorkExample
}

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    <MDXEmbedProvider>
      <MDXProvider components={components}>{element}</MDXProvider>
    </MDXEmbedProvider>
  </ChakraProvider>
  
)