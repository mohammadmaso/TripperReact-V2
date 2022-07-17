import { Flex, Stack, Wrap, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiFeather, FiHome } from 'react-icons/fi';
import AddEditButton from './AddEditButton';

interface Props {
  description: string;
  onAddButtonClick: any;
}

export function EditTravelogueDescription(props: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <FiFeather />
        <Text fontWeight="extrabold">خلاصه سفر</Text>
        <AddEditButton onClick={props.onAddButtonClick} mode="edit" />
      </Wrap>
      <Wrap>
        <Text fontSize="sm" lineHeight="7">
          {props.description}
        </Text>
      </Wrap>
    </Stack>
  );
}
