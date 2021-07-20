import React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
    Link,
    Flex,
    Text,
    OrderedList,
    ListItem,
    useColorMode,
} from "@chakra-ui/react";
import { useRandomColor } from "./useRandomColor";

const ToC = ({ items }) => {

    const { setHover, color, hovered } = useRandomColor()
    return items && items.length ? (
        <Flex
            boxShadow="-5px 5px #000"
            border="solid 2px #000"
            minH="min-content"
            minW={300}
            direction="column"
            p={5}
            my={5}
            display={['none', 'flex', 'flex']}
        >
            <Text
                fontSize={["1xl", "2xl", "3xl"]}
                color="brand.black"
                fontFamily="heading"
                fontWeight={800}
                my={3}
            >
                Quick nav
            </Text>
            <OrderedList>
                {items.map(({ url, title }) => (
                    <ListItem key={url}>
                        <a key={url} href={`${url}/`}>{title}</a>
                    </ListItem>
                ))}
            </OrderedList>
        </Flex>
    ) : null;
};

export default ToC;
