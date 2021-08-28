import { ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Flex,
  Stack,
  Wrap,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BiSquareRounded, BiTransfer } from 'react-icons/bi';
import { FaCampground } from 'react-icons/fa';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { MdFlightTakeoff, MdPlace } from 'react-icons/md';

function TravelogueTransferCard() {
  return (
    <Flex
      justify="space-between"
      borderRadius="full"
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      fontSize="xs"
      h="2.2rem"
      align="center"
    >
      <Center h="2rem" w="2rem" borderRadius="full" bgColor="yellow.400">
        <MdFlightTakeoff size="15" color="white" />
      </Center>
      <Wrap align="center">
        <Text pl="1" pr="2">
          تهران
        </Text>
        <FiArrowLeft />
        <Text pl="4" pr="2">
          شیراز
        </Text>
      </Wrap>
    </Flex>
  );
}

export function EditTransfers() {
  return (
    <Stack>
      <Wrap align="center">
        <BiTransfer />
        <Text>رفت و آمد</Text>
      </Wrap>
      <Wrap>
        <TravelogueTransferCard />
        <TravelogueTransferCard />
      </Wrap>
    </Stack>
  );
}
