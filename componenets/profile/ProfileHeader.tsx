import React from 'react';
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
  Icon,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import {
  ProfileFieldsFragment,
  TripSimpleFieldsFragment,
  UserFieldsFragment,
  UserType,
} from '../../graphql/generated/types';
import Link from 'next/link';
import { FiCamera, FiEdit, FiEdit2, FiSettings } from 'react-icons/fi';
import FollowersModal from '../Modals/FollowersModal';
import FollowingsModal from '../Modals/FollowingsModal';
interface Props {
  isSelf: boolean;
  data: UserFieldsFragment & {
    profilemodel: ProfileFieldsFragment;
    trips: { edges: [node: TripSimpleFieldsFragment] };
  };
}

const ProfileHeader = ({ isSelf, data }: Props) => {
  const modalFollowers = useDisclosure();
  const modalFollowings = useDisclosure();

  return (
    <>
      <Image
        h={'200px'}
        w={'full'}
        alt={data.username}
        src={data.profilemodel.header as string}
        objectFit={'cover'}
      />
      {isSelf ? (
        <Flex justify={'left'} m="2">
          <Button
            variant="solid"
            w="1rem"
            bgColor="white"
            size="sm"
            rounded="full"
            mt="-12"
            opacity="0.8"
          >
            <Icon as={FiCamera} color="gray.600" />
          </Button>
        </Flex>
      ) : null}
      <Flex justify={'center'} mt="-20">
        <Avatar
          size={'2xl'}
          src={data.avatar}
          alt={data.username}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>
      {isSelf ? (
        <Flex justify={'center'}>
          <Button
            variant="solid"
            w="1rem"
            bgColor="white"
            size="sm"
            rounded="full"
            mt="-4"
            opacity="0.8"
          >
            <Icon as={FiCamera} color="gray.600" />
          </Button>
        </Flex>
      ) : null}
      <Box p={6}>
        <Stack spacing={2} align={'center'} mb={5}>
          <Box>
            {isSelf ? (
              <Wrap>
                <Link href="/me/setting" passHref>
                  <Button variant="ghost">
                    <Icon as={FiEdit2} />
                  </Button>
                </Link>
              </Wrap>
            ) : null}
          </Box>
          <Heading fontSize={'2xl'} fontWeight={300} fontFamily={'body'}>
            {data.username}
          </Heading>
          <Wrap>
            {data.profilemodel.tripStatus == true ? (
              <Tag size="sm" colorScheme="primary" variant="solid">
                در سفر
              </Tag>
            ) : (
              ''
            )}
          </Wrap>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>{data.trips.edges.length}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              سفرنامه
            </Text>
          </Stack>
          <Stack
            onClick={modalFollowers.onOpen}
            cursor="pointer"
            spacing={0}
            align={'center'}
          >
            <Text fontWeight={600}>{data.profilemodel.followersCount}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              دنبال‌کننده
            </Text>
          </Stack>

          <Stack
            onClick={modalFollowings.onOpen}
            cursor="pointer"
            spacing={0}
            align={'center'}
          >
            <Text fontWeight={600}>{data.profilemodel.followingsCount}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              دنبال‌شده
            </Text>
          </Stack>
        </Stack>
      </Box>
      <FollowersModal {...modalFollowers} />
      <FollowingsModal {...modalFollowings} />
    </>
  );
};

export default ProfileHeader;
