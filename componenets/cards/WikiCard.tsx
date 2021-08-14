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
  Tag,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { AllArticleQuery, ArticleType } from '../../graphql/generated/types';

export default function WikiCard(props: any) {
  return (
    <Center py={6} m={3} textAlign="right">
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        w={'full'}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image alt="l" src={props?.image as string} objectFit={'cover'} />
        </Box>
        <Flex direction="column" justify="center" spacing="5">
          <Stack spacing="3">
            <Tag
              colorScheme="green"
              textTransform={'uppercase'}
              fontWeight={400}
              fontSize={'sm'}
              p="2"
              w="auto"
            >
              {props?.category.title}
            </Tag>
            <Heading fontSize={'md'}>{props?.title}</Heading>
            <Text colorScheme="gray" fontSize="sm">
              {props?.shortDescription}
            </Text>
          </Stack>
          <HStack w="full" mt={6} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>
                {props?.author.firstName} {props?.author.lastName}
              </Text>
              <Text color={'gray.500'} dir="rtl">
                {props?.timeToRead} دقیقه برای خواندن
              </Text>
            </Stack>
            <Avatar src={props?.author.avatar} alt={props?.author} />
          </HStack>
        </Flex>
      </Box>
    </Center>
  );
}
