import {
  Flex,
  Stack,
  Wrap,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';

export function TravelogueAccomodations() {
  return (
    <Stack>
      <Wrap align="center">
        <FiHome />
        <Text>اقامتگاه‌ها</Text>
      </Wrap>
      <Wrap>
        <Flex
          justify="space-between"
          borderRadius="full"
          bgColor={useColorModeValue('gray.100', 'gray.700')}
          fontSize="xs"
          h="2.7rem"
          align="center"
        >
          <Center h="2.6rem" w="2.6rem" borderRadius="full" bgColor="green.400">
            <FiHome size="20" color="white" />
          </Center>
          <Stack spacing="0" pl="4" pr="2" py="1">
            <Text fontWeight="bold">هتل آراد</Text>
            <Text>۳ روز</Text>
          </Stack>
        </Flex>

        <Flex
          justify="space-between"
          borderRadius="full"
          bgColor={useColorModeValue('gray.100', 'gray.700')}
          fontSize="xs"
          h="2.7rem"
          align="center"
        >
          <Center h="2.6rem" w="2.6rem" borderRadius="full" bgColor="green.400">
            <FaCampground size="20" color="white" />
          </Center>
          <Stack spacing="0" pl="4" pr="2" py="1">
            <Text fontWeight="bold">کمپ جنگلی</Text>
            <Text>۳ روز</Text>
          </Stack>
        </Flex>
      </Wrap>
    </Stack>
  );
}
