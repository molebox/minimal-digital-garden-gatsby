```bash
composer create-project statamic/statamic statamic-gatsby --prefer-dist --stability=dev
```

```bash
composer install
```

```bash
COMPOSER_MEMORY_LIMIT=2G composer install
```

```bash
// At the top
APP_URL=http://statamic-gatsby.test:81/

// Towards the bottom
STATAMIC_API_ENABLED=true
STATAMIC_API_ROUTE=api
```

```php
// From
'enabled' => env('STATAMIC_API_ENABLED', false),
// To
'enabled' => env('STATAMIC_API_ENABLED', true),
```

```php
'pro' => true,
```

```bash
yarn init -y
yarn add react react-dom gatsby @chakra-ui/core gatsby-source-statamic
yarn add prettier -D
```

```json
  "scripts": {
    "dev": "gatsby develop",
    "build": "gatsby build",
    "clean": "gatsby clean",
    "pretty": "prettier --write \"src/**/*js\"",
    "z": "gatsby clean && gatsby develop"
  },
```

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-statamic`,
      options: {
        baseUrl: `http://statamic-gatsby.test:81`,
        collections: [`posts`],
        assets: [`photos`],
      },
    },
  ],
};
```

```jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS>{element}</ChakraProvider>
);
```

```js
import { wrapRootElement as wrap } from './wrap-root-element';

export const wrapRootElement = wrap;
```

```bash
php please make:user
```

```jsx
import React from 'react';
import {
  Flex,
  Container,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/core';
import { graphql, Link as GatsbyLink } from 'gatsby';

const Index = ({ data }) => {
  const posts = data.allCollectionPosts.nodes;

  return (
    <Container h="100vh" centerContent>
      <Flex
        direction="column"
        h="100%"
        w="100%"
        align="center"
        justify="center"
      >
        <Text as="h1" fontSize="6xl" mb={6}>
          Statamic Blog
        </Text>
        <UnorderedList>
          {posts.map((post) => (
            <ListItem>
              <Link as={GatsbyLink} to={post.slug}>
                To {post.slug}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Container>
  );
};

export default Index;

export const query = graphql`
  query IndexQuery {
    allCollectionPosts(sort: { fields: [title], order: ASC }) {
      nodes {
        slug
      }
    }
  }
`;
```

```js
const path = require(`path`);

// create the pages from the statamic md content
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  // Our blog post layout template. Used to layout all out posts
  const postLayoutTemplate = path.resolve('src/templates/post-layout.js');

  return graphql(`
    {
      allCollectionPosts {
        nodes {
          slug
          title
          content
          images {
            permalink
          }
        }
      }
    }
  `).then((result) => {
    // If we get any errors throw them back at'cha
    if (result.errors) {
      throw result.errors;
    }

    // Grab the posts array
    const posts = result.data.allCollectionPosts.nodes;

    // Loop through the posts and create the post pages
    posts.forEach((post, index) => {
      // Get the previous and next posts so that we can navigate between them
      const previous = index === post.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      // Create the page using the slug
      createPage({
        path: post.slug,
        component: postLayoutTemplate,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      });
    });
  });
};
```

```jsx
import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { Container, Text, Image, Link, Flex } from '@chakra-ui/core';
import ReactMarkdown from 'react-markdown/with-html';

const PostLayout = ({ data, pageContext }) => {
  const { title, content, images } = data.collectionPosts;
  const { permalink } = images[0];
  const { previous, next } = pageContext;

  return (
    <Container maxW="100ch" centerContent>
      <Text as="h1" fontSize="2xl" my={5}>
        {title}
      </Text>
      <Image my={6} src={permalink} alt={title} />
      <Text as="p" dangerouslySetInnerHTML={{ __html: content }} />
      <Flex mt={6} w="100%" borderTop="solid 1px" p={3}>
        <Flex w="100ch" justify="space-evenly">
          {previous && (
            <Link as={GatsbyLink} to={`/${previous.slug}`}>
              Previous: {previous.title}
            </Link>
          )}

          {next && (
            <Link as={GatsbyLink} to={`/${next.slug}`}>
              Next: {next.title}
            </Link>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default PostLayout;

export const query = graphql`
  query PostBySlug($slug: String!) {
    collectionPosts(slug: { eq: $slug }) {
      content
      title
      slug
      images {
        permalink
      }
    }
  }
`;
```

```bash
yarn add react-markdown
```

```jsx
// Other imports
import ReactMarkdown from 'react-markdown/with-html';

// Component stuff
<ReactMarkdown source={content} escapeHtml={false} />;
```
