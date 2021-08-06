import { Box, Stack, Wrap, Text, Image, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';

interface Props {}

function AccessoryCard() {
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

        <Image
          fit="contain"
          w="full"
          src="/images/image 3.png"
          alt="accessories"
        />
        <Text px="3">چادر کوهنوردی کله‌گاوی - ظرفیت ۳ نفر</Text>
        <Button>خرید در دیجیکالا</Button>
      </Stack>
    </Box>
  );
}

const Accessories = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiShoppingBag />
        <Text>تجهیزات</Text>
      </Wrap>
      <Wrap spacing="5">
        <AccessoryCard />
        <AccessoryCard />
        <AccessoryCard />
        <AccessoryCard />
      </Wrap>
    </Stack>
  );
};

export default Accessories;
