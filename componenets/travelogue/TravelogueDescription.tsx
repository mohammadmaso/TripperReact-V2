import { Flex, Stack, Wrap, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiFeather, FiHome } from 'react-icons/fi';

interface Props {
  description: string;
}

export function TravelogueDescription(props: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <FiFeather />
        <Text>خلاصه سفر</Text>
      </Wrap>
      <Wrap>
        <Text fontSize="sm" lineHeight="7" whiteSpace="pre-line">
          {props.description}
        </Text>
      </Wrap>
    </Stack>
  );
}
