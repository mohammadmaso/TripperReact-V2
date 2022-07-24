import {
  Box,
  Stack,
  Wrap,
  Text,
  Image,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';

interface Props {}

function AccessoryCard(props: any) {
  return (
    <Box boxShadow="md" p="2" rounded="md" fontSize="sm" fontWeight="light">
      <Stack spacing="3">
        <Flex justifyContent="space-between">
          <FiBookmark />
          <Image
            h="1rem"
            fit="contain"
            src="/images/Digikala.png"
            alt="digikala"
          />
        </Flex>

        <Image
          fit="contain"
          fallbackSrc="images/placeholder.png"
          w="full"
          src={props.imageLink}
          alt="accessories"
        />
        <Text px="3">{props.name}</Text>
        {/* <Link
          isExternal
          size="sm"
          as={Button}
          variant="ghost"
          fontWeight="light"
          // variant="outline"
          color="red"
          href={`https://www.digikala.com/product/dkp-${props.id}`}
        >
          <FiShoppingBag />
          خرید از دیجیکالا
        </Link> */}
      </Stack>
    </Box>
  );
}
export default AccessoryCard;
