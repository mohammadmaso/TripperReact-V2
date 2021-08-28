import React, { useRef, useState } from 'react';
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
  FollowOrUnfollowMutation,
  ProfileFieldsFragment,
  TripSimpleFieldsFragment,
  UpdateProfileMutation,
  UpdateUserInput,
  UpdateUserMutation,
  UserFieldsFragment,
  UserType,
} from '../../graphql/generated/types';
import Link from 'next/link';
import {
  FiCamera,
  FiEdit,
  FiEdit2,
  FiSettings,
  FiShare2,
} from 'react-icons/fi';
import FollowersModal from '../Modals/FollowersModal';
import FollowingsModal from '../Modals/FollowingsModal';
import { RiUserFollowLine } from 'react-icons/ri';
import { FetchResult } from '@apollo/client/link/core/types';
import ProfileEditModal from '../Modals/ProfileEditModal';
import ImageUploadModal from '../Modals/ImageUploadModal';
import ShareModal from '../Modals/ShareModal';
interface Props {
  isSelf: boolean;
  data: UserFieldsFragment & {
    profilemodel: ProfileFieldsFragment;
    trips: { edges: [node: TripSimpleFieldsFragment] };
  };
  actions: any;
  // actions: {
  //   changeUser: (
  //     updateUserInput: UpdateUserInput
  //   ) => Promise<
  //     FetchResult<UpdateUserMutation, Record<string, any>, Record<string, any>>
  //   >;
  //   changeHeader: (
  //     variables: any
  //   ) => Promise<
  //     FetchResult<
  //       UpdateProfileMutation,
  //       Record<string, any>,
  //       Record<string, any>
  //     >
  //   >;
  //   followOrUnfollow: () => Promise<
  //     FetchResult<
  //       FollowOrUnfollowMutation,
  //       Record<string, any>,
  //       Record<string, any>
  //     >
  //   >;
  // };

  lazyQueries: any;
  isFollowed: boolean;
}

const ProfileHeader = ({
  isSelf,
  data,
  actions,
  lazyQueries,
  ...rest
}: Props) => {
  const modalFollowers = useDisclosure();
  const modalFollowings = useDisclosure();
  const editProfileModal = useDisclosure();
  const shareModal = useDisclosure();
  const uploadAvatarModal = useDisclosure();
  const uploadHeaderModal = useDisclosure();

  const [followersCount, setFollowersCount] = useState(
    data.profilemodel.followersCount
  );
  const [followingsCount, setFollowingsCount] = useState(
    data.profilemodel.followingsCount
  );

  const [isFollowed, setIsFollowed] = useState(rest.isFollowed);

  return (
    <>
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
            isLoading={lazyQueries.changeProfileQuery?.loading}
            onClick={uploadHeaderModal.onOpen}
          >
            <Wrap align="center">
              <Icon as={FiCamera} color="gray.600" />

              {lazyQueries.changeProfileQuery?.error &&
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
            isLoading={lazyQueries.changeUserQuery?.loading}
            // onClick={onAvatarButtonClick}
            onClick={uploadAvatarModal.onOpen}
          >
            <Icon as={FiCamera} color="gray.600" />
          </Button>
        </Flex>
      ) : null}
      <Stack p={6} align="center" spacing="2">
        <Stack spacing={2} align={'center'} mb={5}>
          <Box>
            <Wrap>
              {isSelf && (
                <Button variant="ghost" onClick={editProfileModal.onOpen}>
                  <Icon as={FiEdit2} />
                </Button>
              )}
              <Button variant="ghost" onClick={shareModal.onOpen}>
                <Icon as={FiShare2} />
              </Button>
            </Wrap>
          </Box>
          <Heading fontSize={'2xl'} fontWeight={300} fontFamily={'body'}>
            {data.username}
          </Heading>
          <Text
            fontWeight="light"
            textAlign="center"
            whiteSpace="pre-line"
            lineHeight="10"
          >
            {data.profilemodel.about}
          </Text>
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
            <Text fontWeight={600}>{data.trips?.edges?.length}</Text>
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
            <Text fontWeight={600}>{followersCount}</Text>
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
            <Text fontWeight={600}>{followingsCount}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              دنبال‌شده
            </Text>
          </Stack>
        </Stack>
        {!isSelf && (
          <Wrap>
            <Button
              onClick={() =>
                actions.followOrUnfollow().then((res: any) => {
                  if (res.data?.followOrUnfollow?.followStatus == true) {
                    setIsFollowed(true);
                    if (res.errors == null) {
                      setFollowersCount((prev) => prev + 1);
                    }
                  }
                  if (res.data?.followOrUnfollow?.followStatus == false) {
                    setIsFollowed(false);
                    if (res.errors == null) {
                      setFollowersCount((prev) => prev - 1);
                    }
                  }
                })
              }
              isLoading={lazyQueries.followOrUnfollowMutation?.loading}
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
      <ProfileEditModal
        username={data.username}
        about={data.profilemodel.about as string}
        tripStatus={data.profilemodel?.tripStatus as boolean}
        {...editProfileModal}
        actions={actions}
        queries={lazyQueries}
      />
      <ImageUploadModal
        title="اپلود تصویر پروفایل"
        {...uploadAvatarModal}
        defaultImageSrc={data.avatar}
        aspectRatio={1}
        loading={lazyQueries.changeUserQuery?.loading}
        onUpload={(file) =>
          actions
            .changeUser({
              userInputs: { avatar: file },
            })
            .then(uploadAvatarModal.onClose)
        }
      />
      <ImageUploadModal
        title="آپلود تصویر هدر"
        {...uploadHeaderModal}
        defaultImageSrc={data.profilemodel?.header as string}
        aspectRatio={5}
        loading={lazyQueries.changeProfileQuery?.loading}
        onUpload={(file) =>
          actions
            .changeProfile({
              profile: {
                header: file,
              },
            })
            .then(uploadHeaderModal.onClose)
        }
      />
      <ShareModal {...shareModal} url={isSelf ? `/profile/${data.id}` : null} />
    </>
  );
};

export default ProfileHeader;
