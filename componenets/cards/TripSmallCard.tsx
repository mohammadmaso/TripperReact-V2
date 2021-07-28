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
  HStack,
  Tag,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FiHeart, FiMapPin } from 'react-icons/fi';
import { TimeIcon } from '@chakra-ui/icons';

export default function TripSmallCard(props: any) {
  return (
    <Center py={6} m={2} textColor="white">
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}
        w={'full'}
        maxW={'270px'}
        position="relative"
        transition={'all .3s ease'}
        // _hover={{ transform: 'scale(1.1,1.1)' }}
      >
        <Flex
          position="absolute"
          top="0"
          right="0"
          bgGradient="linear(to-b, #000000,#ffffff00)"
          height="40%"
          width="full"
          align="flex-start"
          justifyContent="space-between"
          p={3}
          py={4}
        >
          <Box>
            <Stack spacing="1" justifyItems="center">
              <FiHeart />
              <Text fontSize="sm">{props.likes}</Text>
            </Stack>
          </Box>
          <Flex textColor="white" justify="flex-start">
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text mr="1" textAlign="right" fontWeight={400}>
                {props.username}
              </Text>
              <Wrap spacing="1">
                {props.categories.map((item: any) => (
                  <Tag
                    size="sm"
                    key={item}
                    colorScheme="primary"
                    variant="solid"
                  >
                    {item}
                  </Tag>
                ))}
              </Wrap>
            </Stack>
            <Avatar
              showBorder
              size="md"
              ml="1"
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            />
          </Flex>
        </Flex>

        <Image
          alt="Test"
          src={props.image}
          objectFit={'cover'}
          // fallbackSrc="https://via.placeholder.com/150"
        />
        <Flex
          position="absolute"
          bottom="0"
          right="0"
          bgGradient="linear(to-t, #000000,#ffffff00)"
          height="50%"
          width="full"
          align="flex-end"
          justify="flex-end"
          p="3"
          direction="column"
        >
          <Text width="full" textAlign="right" fontWeight={500}>
            {props.name}
          </Text>
          <Wrap fontSize="sm" fontWeight="light" align="center" spacing="3">
            <Wrap align="center" spacing="1">
              <Text>روز</Text>
              <Text>{props.days}</Text>
              <TimeIcon h="3.5" w="3.5" />
            </Wrap>
            <Wrap align="center" spacing="1">
              <Text>{props.city}</Text>
              <FiMapPin />
            </Wrap>
          </Wrap>
        </Flex>
      </Box>
    </Center>
  );
}
