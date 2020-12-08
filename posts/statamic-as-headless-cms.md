---
title: Statamic as headless CMS with Gatsby
category: Tutorial
description: How to use Statamic as a headless CMS with Gatsby
---

Statamic v3 is many things. It's a Content Management Studio (CMS) where data can be pulled via an API endpoint. It's a Static Site Generator (SSG) which can be deployed to any Content Delivery Network (CDN) known to man. It's a content creation tool, enabling content creators to write posts and store and distribute videos. It's an open source PHP based Laravel package that is designed to scale and be used as both a front and backend.

Phew, that was a lot of joy to be throwing Statamics way. As a first time user I found the experience of both setting it up and grabbing data rather painless. Of course, I stumbled a few times and we will go over those together so that you don't have to do it alone. But all in all I'd have to say that I'm mightily impressed! Also the site and docs are just super cool to look at reading the copy feels like you're chatting with a mate, down the pub on a Sunday.

With the release of v3, Statamic introduced a formal way of grabbing the data stored, the content API. In v2 there was the possibility to use an addon [Fetch](https://statamic.com/addons/aryeh-raber/fetch) which would supply JSON endpoints but with the introduction of the content API, getting your hands on that lovely data has become a first class citizen. It's now fully supported with a read-only endpoint. This feature at the time of writing is a PRO only feature, though we can still use it and try it out on a trial basis until we decide to purchase a license.

So what are we going to build? We're going to be using Statamic as a headless CMS. We'll create a new Statamic project from scratch as well as a new Gatsby project from scratch and join the two, as one, like some super Jamstack baby from the future.

You can view the final project repo here: [statamic-gatsby](https://github.com/molebox/statamic-gatsby).

And the live site here: [statamic-gatsby.netlify.app]

### Prerequisites

- Basic knowledge of React and JavaScript
- Basic knowledge of the command line
- Positivity! Ain't nothing getting done on a downer, let's have some fun!

Cool beans, let's get started!

## Installing Statamic

I'm one of those devs that use a windows machine, I'm not going to apologise, but what I will do it front up some handy info for the other rebels out there who dare operate outside the cool-belt. For Mac users I send you to [laravel homestead](https://laravel.com/docs/8.x/homestead) to get your basic setup going.

Now, assuming we are coming at this from having no PHP installed on our machines I point you towards [laragon](https://laragon.org/) which will cover local apache server, PHP and other goodies installations. Follow the instructions by downloading the installer and hitting yes/next until it's done.

Once you have laragon installed open it up by double clicking the big blue elephant that has taken up residense on your desktop. In the bottom right corner there is a button called Root, hit that. The file explorer will open inside the www folder, it's in here that we will install our Statamic project. But before we do we have to make sure that we have composer installed. For the uninitiated, composer is is the NPM to the PHP world, so a package manager. Head on over to [getcomposer.org/](https://getcomposer.org/) and follow the installation guide.

Now that we have our pieces in place we can install Statamic. Open your terminal inside the www folder inside laragon and run:

```bash
composer create-project statamic/statamic statamic-gatsby --prefer-dist --stability=dev
```

I chose to name the project statamic-gatsby but you can rename this to whatever you like. The reason we created our project in this folder is that laragon creates a virtual host for us and maps the folder name in www to a url appended with .test. In the laragon GUI click the settings cog in the top right and you will see in the General tab the Document root. This is the place that will map the project folder names to the url. If you wish to change this then do so and create your new project in your new folders path. I personally had issues with Apache running on port 80 so changed it to 81, just a heads up, this may not affect you and your installation.

Open the new Statamic project in your fav code editor (I'll be using VSCode) and install all the dependencies.

```bash
composer install
```

It's likely that you will be hit with an out of memory warning. You can first try running the following:

```bash
COMPOSER_MEMORY_LIMIT=2G composer install
```

This attempts to set the memory limit to 2GB, though I have to confess that this particular approach didn't work for me. Instead I had to manually set the new memory limit in the php.ini file. To do so go back to the laragon GUI and click the Menu button, PHP then php.ini. On line 401 change the memory allocation. I just whacked it up to 6GB (memory_limit = 6G) but this of course depends on your setup and what you can afford to spare. Anything above 3 and you should be super safe.

Run composer install again and a vender folder should have been created at the Statamic projects root. Now we are cooking!! Next we will want to open the .env file at the project root and alter/add a few values.

```bash
// At the top
APP_URL=http://statamic-gatsby.test:81/

// Towards the bottom
STATAMIC_API_ENABLED=true
STATAMIC_API_ROUTE=api
```

Add the new sites url as the APP_URL, if you changed the port from 80 then append this otherwise you may encounter a 404 page and be scratching your head for a few hours (you're welcome, and my head hurts). The bottom two additions are telling Statamic that we want to use the new content API and setting the url endpoint to api. Now open config/statamic/api.php and change the following:

```php
// From
'enabled' => env('STATAMIC_API_ENABLED', false),
// To
'enabled' => env('STATAMIC_API_ENABLED', true),
```

Now you can open config/statamic/editions.php and change the license to pro, like so:

```php
'pro' => true,
```

This will enable us to use the content API feature.

## Create a new Gatsby project

I love Gatsby. I especially love creating fresh, brand spanking new Gatsby sites. So let's do just that. Create a new project folder at your location of choice and enter the following from the command line:

```bash
yarn init -y
yarn add react react-dom gatsby @chakra-ui/react@next framer-motion gatsby-source-statamic
yarn add prettier -D
```

That will give you a project folder with a package.json and node_modules and not much else. Create a src/pages folder with an index.js inside the pages folder. Then add the following to your package.json, above the dependencies always seems right to me.

```json
  "scripts": {
    "dev": "gatsby develop",
    "build": "gatsby build",
    "clean": "gatsby clean",
    "pretty": "prettier --write \"src/**/*js\"",
    "z": "gatsby clean && gatsby develop"
  },
```

All pretty standard stuff

- **dev** will spin up a development server
- **build** will make it ready for the outside world
- **clean** will tuck in it's shirt and re-do it's hair
- **pretty** will apply makeup and tighten it's belt
- **z** will start it all over again from scratch. A clean plate if you will.

We are going to take advantage of a handy package called gatsby-source-statamic. This is basically a wrapper around a fetch request to our API endpoint that takes care of sorting out all our collections and assets. We have installed Chakra so that we can add some quick styling to our site. This tutorial won't be a deep dive into styling and will keep things pretty basic, Chakra will at least make the experience a little more pleasant on the eye. Finally we have added prettier as a dev dependency. No funny business, just for our piece of mind when we get those tabs in the wrong place and our spacing all mucked up from copying code from one file to another.

Now we can create a gatsby-config.js file and add the following code. This is adding the Statamic plugin to our Gatsby app and passing in some base options. We have added our Statamic url (along with port, you might not have to do this), as well as defining a post collection and photos assets container. We will create these soon.

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-statamic`,
      options: {
        baseUrl: `http://statamic-gatsby.test:81`,
        collections: [`posts`],
      },
    },
  ],
};
```

Because we are using Chakra we have to tell our app where the styles are coming form. Chakra asks that you wrap the root of your app in a provider which will pass down it's styles throughout the application tree. You can optionally also pass in a custom theme which would override whatever styles you like but we wont be covering that today. As we are using Gatsby as our React app we can use the wrapRootElement function which, as the name suggests, allows us to wrap our applications root with a provider. It's recommended to do this in both the gatsby-browser and gatsby-ssr files, so let's go ahead and create a single file we can export from both rather than duplicating code in both files. Create a new file at the root of the project called wrap-root-element.js and add the following code.

```jsx
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS>{element}</ChakraProvider>
);
```

Now create both gatsby-browser.js and gatsby-ssr.js and add the following code. We are going to import our new wrap-root-element file and export it again from each file.

```js
import { wrapRootElement as wrap } from "./wrap-root-element";

export const wrapRootElement = wrap;
```

That's our base setup done for Gatsby. We will be adding some node code soon to dynamically create our blog post pages from the data in Statamic. But for now let's take a closer look at Statamic and how we can organise our blog posts before creating and styling our Gatsby frontend.

## The Statamic GUI

Before we can enter our Statamic project we will need to create a new super user to login with. From the command line run the following (amazingly intuitive) code then follow the on terminal prompts.

```bash
php please make:user
```

To start our Statamic project open the laragon GUI and in the bottom left hit the Start All button. This will spin up an Apache server running our project. Then navigate to the url that is our project name with .test and possibly the port number. You might also have to try clicking the menu button on the top left and then the sites name which will have an external link icon. In my case it was http://statamic-gatsby.test:81 This will bring up a login page, login with the super user details you just created then once logged into the home page, click the control panel. It's time to create our first blog post, but before we do let's quickly go over some of the stuff we can do.

On the left of the page you will see a menu with content, fields, tools and users. The content section holds stuff that will be displayed on the site. One of the options here, collections, is where we will be spending most of our time. But I first want to direct you towards the Fields section and the Blueprints option. A blueprint is like a template for a collection entity. When creating or editing a blueprint we can change what fields are expected when creating a collections entity through adding or creating widgets, such as text areas, images or markdown content areas.

## A new collection

Click on the collections tab on the left and then the blue create collection button, call the new collection Posts and hit create. Next you will see a dashboard, click create entity and just add some arbitrary name like My First Post. This will be our first test post. Add some text to the markdown content box, whatever you like, and hit save and publish. This new collection and entity within that collection will now be available to pull into our Gatsby site.

But what if we wanted to add more data to our post? An image perhaps, or a date picker or contact form? Fear not young padawan because that's where the blueprints come into play. Now that we have created our new collection we can create a blueprint for each of the new entities that are created under that collection. Head over to the blueprints section and click on the newly created Posts collection. From here you can choose to add or link fields. We wont cover linking fields but adding new fields simply enables you to have access to more fields when creating your collection entities. Add an assets field and rename it images so that each of our blog posts can have a hero image. The default settings will do for us.

If you navigate back to the Posts collection and click on the first entity you create, My First Post, you should now be able to add an image. Pick and image from your filesystem or download one. Add some super informative text to the markdown content area (or just [lorem ipsum](https://hipsum.co/) it up) then create a few more posts, each with a title, content and image.

## Statamic feeding Gatsby

When we left our Gatsby site all we had was a measly package.json a config file and some scripts. Pah! Let's add some meat to those bones! Inside our index.js add the following:

```jsx
import React from "react";
import {
  Flex,
  Container,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";

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

Yeah I know, that's quite a lot to digest all of a sudden. Let's break it down in a nice, simple bullet list.

- Imports of the components we use from Chakra. Notice that we import a Link component
- Imports from Gatsby, the graphql function and the Gatsby Link which we rename as we will be using the Chakra Link instead (for it's default styling and accessibility)
- The page accepts a data object which we destructure
- We pull out the posts array from the data object
- The main bulk of the component. A simple flex container which renders an h1 and a list of internal links to blog posts
- An exported graphql query. It's exported so that our page can pick it up on render. It asks for the post slug which we use for the url to navigate to.

## Using the data from Statamic

If you run yarn dev then you should see our title and one post underneath it. Clicking this will just throw an error as we haven't told Gatsby what to do with this information yet, let's do that now. Create a gatsby-node.js file at the projects root.

```js
const path = require(`path`);

// create the pages from the statamic md content
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  // Our blog post layout template. Used to layout all out posts
  const postLayoutTemplate = path.resolve("src/templates/post-layout.js");

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

There's a lot to unfold there, let's break it down.

- We use the createPages API where we destructure the createPage and graphql functions
- We create a new post layout template at an as yet un-created path
- Much like our query in the index.js file, we request some data from Statamic. This time we want the posts title, it's slug, the actual markdown content and an image
- As it's a promise we first see what is returned, if it's an error we just throw that back to the user (which is you), otherwise we get the posts and loop over them. For each post in the array we create a page using our post layout page (which we shall soon create). Our post layout can accept a page context so we use that to pass the slug and the previous and next index of any other posts that my exist.

## Our post layout

Now that Gatsby know what to do with our data, let's create the post layout template so that our blog post can be rendered on their own awesome pages. Create a new folder inside of the src folder called templates and inside that a file called post-layout.js

```jsx
import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Container, Text, Image, Link, Flex } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown/with-html";

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

This is the meat and bones of our blog, it's our actual blog content. This component does quite a lot. We destructure the graphql data and the page context (which we passed into the page when we used the createPage function in gatsby-node.js). From then we grab our posts data, the title, content and image. From the page context we take the previous and next indexes which we will use as navigation slugs. Our image is rendered using the Image component from Chakra. We use dangerouslySetInnerHTML to set our blogs content in the page. This is not really recommended and we will cover this in more detail in just a second. Moving down the component we conditionally render either the next or previous post links depending on whether or not they actually exist. If either does exist we use the Chakra link and pass in the Gatsby link. This is because the Chakra link component has some nice accessible defaults. We then simply set the to prop (where this link is pointing to) with the indexes slug.

Our query accepts the slug and pulls the data from the post that matches the passed in slug. Using dangerouslySetInnerHTML to set the HTML of the content is a bit silly really, especially when there are other, better ways of doing this. The markdown content that Statamic returns to us is parsed into pure HTML, that is, it's a bunch of paragraph tags literally wrapping our text. If you just render the content to the page like so {content} then you will see those tags. Instead of directly placing that HTML into the DOM and so bypassing the React (it doesn't care it's there, in fact it will bypass it completely as React compares the difference against the virtual DOM and it doesn't exist there), we can use a package called react-markdown which will parse the HTML for us and insert it into the page without using dangerouslySetInnerHTML.

```bash
yarn add react-markdown
```

Now we can simply replace our dangerouslySetInnerHTML with the react-markdown component setting its source to our content. We are parsing the HTML rendering it to the page. We pass the escapeHtml flag as false meaning that we we will render the HTML and that we trust it's source, which we do because we wrote it.

```jsx
// Other imports
import ReactMarkdown from "react-markdown/with-html";

// Component stuff
<ReactMarkdown source={content} escapeHtml={false} />;
```

## Final thoughts

I had never used Statamic before, indeed I had never coded PHP and had been somewhat apprehensive as to how this was going to go and the learning curve that I might be letting myself in for. Add to the mix that I'm a windows dev (BOO! HISS!!) and I thought I was going to be in for a long ride. I was however pleasantly surprised at how easy it was to get things up and running using Statamic as a headless CMS. Once I ironed out the creases in setup I found the actual application really nice to work with. The menus are very intuitive and if there was anything that I couldn't find I was happy to see that the documentation was on point and the community very helpful. I did end up using a pre-made Gatsby plugin to bring in my data (why re-invent the wheel?) but the documentation for the [Content API](https://statamic.dev/content-api) is pretty clear and using this with something like [NextJS](https://nextjs.org/) should be a breeze too, pulling your data in via REST endpoints. I heard on the grapevine that the Statamic team are currently working on a GraphQL layer, which would be awesome.

I'm definitely going to be trying out Statamic again, most likely with NextJS next time and most likely with a more complex use case. Hit me up with your thoughts on Statamic and any feedback you might have.
