import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ChakraProvider, Text, UnorderedList, ListItem, Image, Link } from "@chakra-ui/core";
import theme from './src/theme';
import Code from './src/components/blog/code';
import Layout from './src/components/layout';
import { RoughNotation } from 'react-rough-notation';
import {Loader} from '@react-three/drei';

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
  li: (props) => <ListItem><Text fontFamily="body" fontSize="xl">{props.children}</Text></ListItem>,
  p: (props) => <Text my={2} fontSize="xl" fontFamily="body">{props.children}</Text>,
  img: (props) => (
    <Image m="0 auto" src={props.src} alt={props.alt} boxSize={props.boxSize} />
  ),
  a: (props) => (
    <Link isExternal href={props.href}>
      <RoughNotation multiline type="underline" color="#1f2127" show={true}>
        {props.children}
      </RoughNotation>
    </Link>
  ),
  wrapper: ({children, ...props}) => {
    return (
      <Layout>
          {children}
      </Layout>
    )
  },
}

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    <MDXProvider components={components}>{element}</MDXProvider>
    <Loader containerStyles={{background: 'white'}} dataStyles={{color: '#1f2127'}} dataInterpolation={(p) => `Planting seeds... ${p.toFixed(2)}%`}/>
  </ChakraProvider>
  
)