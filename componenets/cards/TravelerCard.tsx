import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Tag,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';

export default function TravelerCard() {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image
          h={'120px'}
          w={'full'}
          alt="Traveler"
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={2} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={300} fontFamily={'body'}>
              Mohammadmao
            </Heading>
            <Wrap>
              <Tag size="sm" colorScheme="primary" variant="solid">
                طبیعت گردی
              </Tag>
              <Tag size="sm" colorScheme="primary" variant="solid">
                کوه‌نوردی
              </Tag>
            </Wrap>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>۲۳</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                سفرنامه
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>۲۴۵</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                دنبال‌کننده
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            fontWeight="medium"
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            جزییات بیشتر
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
