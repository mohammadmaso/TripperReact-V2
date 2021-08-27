import { MutationResult } from '@apollo/client/react/types/types';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Stack,
  Wrap,
  Text,
  Tag,
  Divider,
  useEventListener,
  Avatar,
  HStack,
  useColorModeValue,
  Flex,
  Button,
  Tooltip,
  Spinner,
  useDisclosure,
  Icon,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillBook, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  FiBookmark,
  FiCheck,
  FiEdit,
  FiEye,
  FiHeart,
  FiMoreVertical,
  FiShare,
  FiShare2,
  FiTrash,
  FiX,
} from 'react-icons/fi';
import {
  HiBookmark,
  HiBookmarkAlt,
  HiLocationMarker,
  HiOutlineBookmark,
} from 'react-icons/hi';
import {
  RiBookmark2Fill,
  RiBookMarkFill,
  RiBookMarkLine,
} from 'react-icons/ri';
import { BounceLoader } from 'react-spinners';
import {
  PublisTripMutation,
  UnPublisTripMutation,
  UserType,
} from '../../graphql/generated/types';
import { useIsMineTrip } from '../../hooks/useIsMineTrip';
import useIsSignedIn from '../../hooks/useIsSignedIn';
import DeleteConfirmModal from '../Modals/DeleteConfirmModal';
import ShareModal from '../Modals/ShareModal';
interface Props {
  title: string | undefined;
  categories: any;
  author: any;
  days: string;
  date: any;
  country: string;
  province: string;
  actions: any;
  queries: any;
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
  published: boolean;
}

export function TravelogueHeader(props: Props) {
  const [stickyHeader, setStickyHeader] = useState(false);

  const [isSaved, setIsSaved] = useState(props.isSaved);
  const isMineTrip = useIsMineTrip(props.author?.username as string);

  const [isPublished, seIsPublished] = useState(props.published);

  const shareModal = useDisclosure();
  const deleteModal = useDisclosure();

  const { goToSignUp, isSignedIn } = useIsSignedIn();

  const handlePublishClick = () => {
    if (!isPublished) {
      props.actions.publishTrip().then(() => seIsPublished(true));
    } else {
      props.actions.unPublishTrip().then(() => seIsPublished(false));
    }
  };

  const handleScroll = () => {
    if (window.pageYOffset > 120) {
      if (!stickyHeader) {
        setStickyHeader(true);
      }
    } else {
      if (stickyHeader) {
        setStickyHeader(false);
      }
    }
  };
  useEventListener('scroll', handleScroll);

  return (
    <>
      <Flex
        // position={stickyHeader ? 'fixed' : undefined}
        pt={'2'}
        pb={'2'}
        // boxShadow={stickyHeader ? 'md' : '0'}
        // bgColor={stickyHeader ? 'white' : 'transparent'}
        zIndex="90"
        // top={stickyHeader ? '60px' : undefined}
        w="full"
        transitionDuration="2"
        justify="space-between"
        align="center"
      >
        <Stack>
          <Wrap>
            {isMineTrip && isPublished ? (
              <Tag colorScheme="green">
                <Icon ml="1" as={FiCheck} />
                منتشر شده
              </Tag>
            ) : (
              <Tag colorScheme="red">
                <Icon ml="1" as={FiX} />
                منتشر نشده
              </Tag>
            )}
            <Text as="h1" fontSize="xl" fontWeight="semibold">
              {props.title}
            </Text>
          </Wrap>
          <Wrap fontWeight="light" fontSize="sm">
            <HStack align={'center'} justify="space-between">
              <Avatar
                src={props.author?.avatar}
                alt={props.author?.username}
                size="sm"
                ml="2"
              />
              <Text fontWeight={300} fontSize="sm" dir="ltr">
                {props.author?.username}
              </Text>
            </HStack>
            {props.categories?.map((item: any) => (
              <Tag key={item.node.id} colorScheme="primary">
                {item.node.title}
              </Tag>
            ))}

            <Divider orientation="vertical" />
            <Wrap align="center">
              <TimeIcon ml="1" />
              <Text>{props.days}</Text>
            </Wrap>
            <Divider orientation="vertical" />
            <Wrap align="center">
              <CalendarIcon ml="1" />
              <Text>{props.date}</Text>
            </Wrap>
            <Divider orientation="vertical" />
            <Wrap align="center">
              <HiLocationMarker />
              <Text>{`${props.country} - ${props.province}`}</Text>
            </Wrap>
          </Wrap>
        </Stack>

        {isSignedIn ? (
          <Wrap
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            spacing="2"
            alignItems="center"
            justify="center"
            align="center"
          >
            <Wrap
              direction={{
                base: 'column-reverse',
                sm: 'column-reverse',
                md: 'row',
                lg: 'row',
              }}
              spacing="1"
              align="center"
              justify="center"
              alignItems="center"
            >
              <Wrap fontSize="xs" spacing="1">
                <Text>
                  {props.queries?.likeTripStatus?.data == null
                    ? `${props.likes}`
                    : `${props.queries?.likeTripStatus?.data.createTripLike.trip.likes}`}
                </Text>
              </Wrap>

              <Wrap
                spacing="0.5"
                transition={'all .3s ease'}
                _hover={{ transform: 'scale(1.3,1.3)' }}
                onClick={() => props.actions.likeTrip()}
                cursor="pointer"
              >
                {!props.queries.likeTripStatus.loading ? (
                  props.isLiked ||
                  props.queries.likeTripStatus?.data?.createTripLike?.like ? (
                    <AiFillHeart size="20" color="red" />
                  ) : (
                    <AiOutlineHeart size="20" />
                  )
                ) : (
                  <Spinner size="xs" />
                )}
              </Wrap>
            </Wrap>
            <Divider orientation="vertical" />
            <Wrap
              transition={'all .3s ease'}
              _hover={{ transform: 'scale(1.3,1.3)' }}
              onClick={() => {
                props.actions.saveTrip();
                setIsSaved(!isSaved);
              }}
            >
              {!props.queries.saveTripStatus.loading ? (
                isSaved ? (
                  <HiBookmark size="20" />
                ) : (
                  <HiOutlineBookmark size="20" />
                )
              ) : (
                <Spinner size="xs" />
              )}
            </Wrap>
            <Divider orientation="vertical" />

            <Wrap
              transition={'all .3s ease'}
              _hover={{ transform: 'scale(1.3,1.3)' }}
              onClick={shareModal.onOpen}
              cursor="pointer"
            >
              <Icon as={FiShare2} size="20" />
            </Wrap>

            {isMineTrip && (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<FiMoreVertical size="20" />}
                  variant="ghost"
                />
                <MenuList fontSize="sm">
                  <MenuItem icon={<FiEdit />}>ویرایش</MenuItem>
                  <MenuItem
                    isDisabled={
                      props.queries.publishTripStatus.loading ||
                      props.queries.unPublishTripStatus.loading
                    }
                    icon={<FiEye />}
                    onClick={handlePublishClick}
                  >
                    {isPublished ? 'عدم انتشار' : 'انتشار'}
                  </MenuItem>
                  <MenuItem onClick={deleteModal.onOpen} icon={<FiTrash />}>
                    حذف سفرنامه
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Wrap>
        ) : (
          <Tooltip
            onClick={() => goToSignUp()}
            hasArrow
            label="برای لایک و ذخیره کردن ابتدا وارد شوید"
            bg="gray.300"
            color="black"
          >
            <Wrap
              direction={{ base: 'column', sm: 'column', md: 'row' }}
              alignContent="left"
              spacing="2"
              // style={{ filter: 'blur(1px)' }}
            >
              <Wrap spacing="1" align="center">
                <Wrap style={{ filter: 'blur(0px)' }} fontSize="xs" spacing="1">
                  <Text>{`${props.likes}`}</Text>
                </Wrap>
                <Wrap spacing="0.5">
                  <FiHeart size="20" />
                </Wrap>
              </Wrap>
              <Divider orientation="vertical" />
              <FiBookmark size="20" />
              <Divider orientation="vertical" />

              <Wrap
                transition={'all .3s ease'}
                _hover={{ transform: 'scale(1.3,1.3)' }}
                onClick={shareModal.onOpen}
                cursor="pointer"
              >
                <Icon as={FiShare2} size="20" />
              </Wrap>
            </Wrap>
          </Tooltip>
        )}
      </Flex>
      <ShareModal {...shareModal} />
      <DeleteConfirmModal
        {...deleteModal}
        title={props.title}
        status={props.queries.deleteTripStatus}
        deleteAction={props.actions.deleteTrip}
      />
    </>
  );
}
