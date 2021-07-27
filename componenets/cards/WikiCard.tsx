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
          <Image alt="l" src={props.image} objectFit={'cover'} />
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
              {props.category}
            </Tag>
            <Heading fontSize={'md'}>یک عنوان آزمایشی مقاله</Heading>
            <Text colorScheme="gray" fontSize="sm">
              لورم اپیسو متنی آزمایشی است که از آن برای نمایش داده‌ها به صورت
              تست استفاده می‌کنیم.
            </Text>
          </Stack>
          <HStack w="full" mt={6} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>محمد مسعودی</Text>
              <Text color={'gray.500'}>خواندن ۶ دقیقه</Text>
            </Stack>
            <Avatar
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            />
          </HStack>
        </Flex>
      </Box>
    </Center>
  );
}
