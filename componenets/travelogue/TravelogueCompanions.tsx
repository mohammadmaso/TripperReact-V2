import {
  Stack,
  Wrap,
  Text,
  Avatar,
  HStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FiFeather, FiUsers } from 'react-icons/fi';

interface Props {}

function CompanionCard() {
  return (
    <HStack
      align={'center'}
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      pr="1"
      pl="3"
      py="1"
      borderRadius="full"
      justify="space-between"
    >
      <Avatar
        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
        alt={'Author'}
        size="sm"
        ml="2"
      />
      <Text fontWeight={300} fontSize="sm" dir="ltr">
        @mohammadmaso
      </Text>
    </HStack>
  );
}

const TravelogueCompanions = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiUsers />
        <Text>همراهان</Text>
      </Wrap>
      <Wrap>
        <CompanionCard />
        <CompanionCard />
      </Wrap>
    </Stack>
  );
};

export default TravelogueCompanions;