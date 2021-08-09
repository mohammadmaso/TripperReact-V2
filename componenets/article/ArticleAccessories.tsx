import { Box, Stack, Wrap, Text, Image, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';
import AccessoryCard from '../cards/AccessoryCard';

interface Props {}

const ArticleAccessories = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiShoppingBag />
        <Text>تجهیزات</Text>
      </Wrap>
      <Wrap spacing="5" justify={{ base: 'center', md: 'right' }}>
        <AccessoryCard />
        <AccessoryCard />
        <AccessoryCard />
        <AccessoryCard />
      </Wrap>
    </Stack>
  );
};

export default ArticleAccessories;
