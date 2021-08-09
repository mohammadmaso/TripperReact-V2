import { Box, Stack, Wrap, Text, Image, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';
import AccessoryCard from '../cards/AccessoryCard';

interface Props {}

const TravelogueAccessories = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiShoppingBag />
        <Text>تجهیزات</Text>
      </Wrap>
      <Wrap spacing="5" justify="center">
        <AccessoryCard />
        <AccessoryCard />
        <AccessoryCard />
        <AccessoryCard />
      </Wrap>
    </Stack>
  );
};

export default TravelogueAccessories;
