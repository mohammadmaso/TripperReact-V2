import { Flex, Stack, Wrap, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { BiSquareRounded } from 'react-icons/bi';
import { FaCampground } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';

function PlaceCard() {
  return (
    <Flex
      justify="space-between"
      borderRadius="full"
      bgColor="gray.100"
      fontSize="xs"
      h="2.2rem"
      align="center"
    >
      <Center h="2rem" w="2rem" borderRadius="full" bgColor="blue.400">
        <BiSquareRounded size="15" color="white" />
      </Center>
      <Text pl="4" pr="2" py="1">
        میدان شهرداری
      </Text>
    </Flex>
  );
}

function CityList() {
  return (
    <Stack>
      <Flex
        justify="space-between"
        borderRadius="full"
        bgColor="gray.100"
        fontSize="xs"
        h="1.7rem"
        align="center"
      >
        <Text pl="4" pr="2" py="1">
          شیراز
        </Text>
      </Flex>
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
    </Stack>
  );
}

export function Places() {
  return (
    <Stack>
      <Wrap align="center">
        <MdPlace />
        <Text>جاذبه‌ها</Text>
      </Wrap>
      <Wrap>
        <CityList />
        <CityList />
        <CityList />
      </Wrap>
    </Stack>
  );
}
