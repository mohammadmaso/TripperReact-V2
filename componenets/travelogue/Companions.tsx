import { Stack, Wrap, Text, Avatar, HStack, Flex } from '@chakra-ui/react';
import React from 'react';
import { FiFeather, FiUsers } from 'react-icons/fi';

interface Props {}

function CompanionCard() {
  return (
    <HStack
      align={'center'}
      bgColor="gray.100"
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

const Companions = (props: Props) => {
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

export default Companions;
