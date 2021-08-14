import React, { ReactElement } from 'react';

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react';

export default function CategoryCard(props: any) {
  return (
    <Center py={6} m={2}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}
        h={'150px'}
        minW={'230px'}
        position="relative"
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
      >
        <Image alt={props.title} src={props.image} objectFit={'cover'} />
        <Flex
          position="absolute"
          bottom="0"
          right="0"
          bgGradient="linear(to-t, #000000,#ffffff00)"
          height="70%"
          width="full"
          align="flex-end"
        >
          <Text
            width="full"
            textAlign="end"
            fontWeight={500}
            color={'white'}
            p="3"
          >
            {props.title}
          </Text>
        </Flex>
      </Box>
    </Center>
  );
}
