import { Box, Stack, Wrap, Text, Image, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';

interface Props {}

function AccessoryCard(props: any) {
  return (
    <Box boxShadow="md" p="2" rounded="md" fontSize="sm" fontWeight="light">
      <Stack spacing="3">
        <Flex justify="space-between">
          <FiBookmark />
          <Image
            h="1rem"
            fit="contain"
            src="/images/Digikala.png"
            alt="digikala"
          />
        </Flex>

        <Image fit="contain" w="full" src={props.imageLink} alt="accessories" />
        <Text px="3">{props.name}</Text>
        <Button
          size="sm"
          fontWeight="light"
          variant="outline"
          colorScheme="red"
          leftIcon={<FiShoppingBag />}
        >
          خرید در دیجیکالا
        </Button>
      </Stack>
    </Box>
  );
}
export default AccessoryCard;
