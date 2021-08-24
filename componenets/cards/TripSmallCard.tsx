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
  Spinner,
} from '@chakra-ui/react';
import { FiHeart, FiMapPin } from 'react-icons/fi';
import { TimeIcon } from '@chakra-ui/icons';
import { getDays } from '../../utils/time';
import Link from 'next/link';
import {
  namedOperations,
  TripSimpleFieldsFragment,
  TripType,
  useLikeTripMutation,
} from '../../graphql/generated/types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  data: any;
  actions: any;
  queries: any;
}
export default function TripSmallCard({ data }: Props) {
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    refetchQueries: [namedOperations.Query.TripDetailLikes],
    variables: { createTripLikeTripId: data.id },
  });

  return (
    // <Link href={`/travelogues/${data.id}`} passHref>
    <Center py={6} m={2} textColor="white" cursor="pointer">
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}
        maxW={'full'}
        minW="250px"
        h="300px"
        position="relative"
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
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
          <Flex textColor="white" justify="flex-start">
            <Avatar
              showBorder
              size="md"
              ml="1"
              mr="1"
              src={data.author?.avatar}
              alt={data.author?.username}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text mr="1" textAlign="right" fontWeight={400}>
                {data.author?.username}
              </Text>
              <Wrap spacing="1">
                {data.categories?.edges.map((item: any) => (
                  <Tag
                    size="sm"
                    key={item.node}
                    colorScheme="primary"
                    variant="solid"
                  >
                    {item.node?.title}
                  </Tag>
                ))}
              </Wrap>
            </Stack>
          </Flex>
          <Box>
            <Stack spacing="1" justifyItems="center" alignItems="flex-end">
              <Wrap
                spacing="0.5"
                transition={'all .3s ease'}
                _hover={{ transform: 'scale(1.3,1.3)' }}
                onClick={() => likeTrip()}
                cursor="pointer"
              >
                {!likeTripStatus?.loading ? (
                  data.userLiked ||
                  likeTripStatus?.data?.createTripLike?.like ? (
                    <AiFillHeart size="20" color="red" />
                  ) : (
                    <AiOutlineHeart size="20" />
                  )
                ) : (
                  <Spinner size="xs" />
                )}
              </Wrap>
              <Text fontSize="sm">
                {likeTripStatus?.data == null
                  ? `(${data.likes})`
                  : `(${likeTripStatus?.data?.createTripLike?.trip?.likes})`}
              </Text>
            </Stack>
          </Box>
        </Flex>

        <Image
          alt="Test"
          src={data.defaultImage}
          objectFit="cover"
          h="full"
          fallbackSrc="images/placeholder.png"
        />
        <Link href={`/travelogues/${data.id}`} passHref>
          <Flex
            position="absolute"
            bottom="0"
            right="0"
            bgGradient="linear(to-t, #000000,#ffffff00)"
            height="50%"
            width="full"
            align="flex-start"
            justify="flex-end"
            p="3"
            direction="column"
          >
            <Text fontWeight={500}>{data.title}</Text>
            <Wrap fontSize="sm" fontWeight="light" align="center" spacing="3">
              <Wrap align="center" spacing="1">
                <TimeIcon h="3.5" w="3.5" />
                <Text>{getDays(data.startDate, data.endDate)}</Text>
              </Wrap>
              <Wrap align="center" spacing="1">
                <FiMapPin />
                <Text>{`${data.country?.name} - ${data.province?.name}`}</Text>
              </Wrap>
            </Wrap>
          </Flex>
        </Link>
      </Box>
    </Center>
  );
}
