import { Center, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
interface Props {
  id: string;
  title: string;
  svg: string;
}

export function ActivityCard(props: Props) {
  return (
    <Center
      p="3"
      rounded="sm"

      // shadow="sm"
      _hover={{ transform: 'scale(1.1,1.1)' }}
      transition={'all .3s ease'}
    >
      <Stack align="center" justify="center" textAlign={"center"} >
        <Image w={"4rem"} h={"4rem"} src={props.svg} objectFit="scale-down" alt={props.title} />
        <Text  fontSize="xs">{props.title}</Text>
      </Stack>
    </Center>
  );
}