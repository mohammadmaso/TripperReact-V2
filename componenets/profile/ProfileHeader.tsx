import React, { useRef } from 'react';
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
  Spinner,
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
import { RiUserFollowLine } from 'react-icons/ri';
interface Props {
  isSelf: boolean;
  data: UserFieldsFragment & {
    profilemodel: ProfileFieldsFragment;
    trips: { edges: [node: TripSimpleFieldsFragment] };
  };
  actions: any;
  lazyQueries: any;
  isFollowed: boolean;
}

const ProfileHeader = ({
  isSelf,
  data,
  actions,
  lazyQueries,
  isFollowed,
  ...rest
}: Props) => {
  const modalFollowers = useDisclosure();
  const modalFollowings = useDisclosure();

  const inputFileHeader = useRef<HTMLInputElement>(null);

  const onChangeHeaderInput = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    if (validity.valid) {
      actions.changeHeader({
        updateProfileInput: {
          profile: {
            header: file,
          },
        },
      });
    }
  };

  const onHeaderButtonClick = () => {
    // `current` points to the mounted file input element
    inputFileHeader?.current?.click();
  };
  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFileHeader}
        style={{ display: 'none' }}
        onChange={onChangeHeaderInput}
      />
      <Image
        h={'200px'}
        w={'full'}
        alt={data.username}
        src={data.profilemodel.header as string}
        objectFit={'cover'}
        fallbackSrc="/images/placeholder.png"
      />
      {isSelf ? (
        <Flex justify={'left'} m="2">
          <Button
            variant="solid"
            bgColor="white"
            size="sm"
            rounded="full"
            mt="-12"
            opacity="0.8"
            isLoading={lazyQueries.changeHeaderQuery.loading}
            onClick={onHeaderButtonClick}
          >
            <Wrap align="center">
              <Icon as={FiCamera} color="gray.600" />

              {lazyQueries.changeHeaderQuery.error &&
                'خطا! دوباره امتحان کنید.'}
            </Wrap>
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
      <Stack p={6} align="center" spacing="2">
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
        {!isSelf && (
          <Wrap>
            <Button
              onClick={() => actions.followOrUnfollow()}
              isLoading={lazyQueries.followOrUnfollowMutation.loading}
              colorScheme="primary"
              rounded="full"
              variant={isFollowed ? 'solid' : 'outline'}
              leftIcon={<RiUserFollowLine />}
              size="sm"
            >
              {isFollowed ? 'قطع دنبال‌کردن' : 'دنبال‌ کردن'}
            </Button>
          </Wrap>
        )}
      </Stack>
      <FollowersModal
        isSelf={isSelf}
        {...modalFollowers}
        actions={actions}
        queries={lazyQueries}
      />
      <FollowingsModal
        isSelf={isSelf}
        {...modalFollowings}
        actions={actions}
        queries={lazyQueries}
      />
    </>
  );
};

export default ProfileHeader;
