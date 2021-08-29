import {
  Container,
  Flex,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Divider,
  TagRightIcon,
  TagLabel,
  Box,
  useEventListener,
  Text,
  Button,
  Center,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import { TravelogueAccomodations } from '../../componenets/travelogue/TravelogueAccomodations';
import { TravelogueMap } from '../../componenets/travelogue/TravelogueMap';
import { TravelogueHeader } from '../../componenets/travelogue/TravelogueHeader';
import { TravelogueGallery } from '../../componenets/travelogue/TravelogueGallery';
import { TravelogueDescription } from '../../componenets/travelogue/TravelogueDescription';
import TravelogueCompanions from '../../componenets/travelogue/TravelogueCompanions';
import { TravelogueExperiences } from '../../componenets/travelogue/TravelogueExperiences';
import { TraveloguePlaces } from '../../componenets/travelogue/TraveloguePlaces';
import TravelogueAccessories from '../../componenets/travelogue/TravelogueAccessories';
import { Transfers } from '../../componenets/travelogue/TravelogueTransfers';
import TravelogueActivities from '../../componenets/travelogue/TravelogueActivities';
import { TripDetailQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import TravelogueReview from './TravelogueReview';
import useScrollReachedId from '../../hooks/useIsScrollReachedId';
import useIsScrollReachedId from '../../hooks/useIsScrollReachedId';
import EmptyResult from '../EmptyResult';
import { BiComment, BiCommentAdd } from 'react-icons/bi';
import useIsSignedIn from '../../hooks/useIsSignedIn';
import AddReviewModal from '../Modals/AddReviewModal';

interface Props {
  data: TripDetailQuery;
  actions: any;
  queries: any;
}

export default function TravelogueContainer({ data, queries, actions }: Props) {
  const isSignedIn = useIsSignedIn();
  const toast = useToast();
  const addReviewModal = useDisclosure();

  function handleAddReviewClick() {
    if (!isSignedIn) {
      toast({
        title: 'برای کاربران',
        description:
          'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
        status: 'info',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    } else {
      addReviewModal.onOpen();
    }
  }

  return (
    <>
      <Wrap direction="column">
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="1">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4" w="full">
              {data?.trip?.images.edges.length != 0 && (
                <TravelogueGallery
                  images={data?.trip?.images.edges!}
                  // videos={data?.trip?.videos.edges}
                />
              )}

              <Divider />
              <TravelogueAccomodations />
              <Divider />
              <Transfers />

              {data?.trip?.places.edges.length != 0 && (
                <>
                  <Divider />
                  <TraveloguePlaces places={data?.trip?.places.edges} />
                </>
              )}
              {data?.trip?.description && (
                <>
                  <Divider />
                  <TravelogueDescription
                    description={data?.trip?.description}
                  />
                </>
              )}

              {data?.trip?.experiences?.edges.length != 0 && (
                <>
                  <Divider />
                  <TravelogueExperiences
                    experiences={data?.trip?.experiences?.edges!}
                  />
                </>
              )}

              {data?.trip?.companions.edges.length != 0 && (
                <>
                  <Divider />
                  <TravelogueCompanions
                    companions={data?.trip?.companions.edges!}
                  />
                </>
              )}
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4" w="full">
              <TravelogueMap />

              {data?.trip?.activities.edges.length != 0 && (
                <>
                  <Divider />
                  <TravelogueActivities
                    activities={data?.trip?.activities.edges!}
                  />
                </>
              )}

              {data?.trip?.accessories.edges.length != 0 && (
                <>
                  <Divider />
                  <TravelogueAccessories
                    accessories={data?.trip?.accessories.edges}
                  />
                </>
              )}
            </Stack>
          </Wrap>
        </Flex>
        <Divider />
        <Stack className="reviews">
          <Wrap align="center">
            <BiComment />
            <Text fontWeight="bold">نقد و بررسی‌ها</Text>
            <Button size="sm" onClick={actions.getReviews}>
              مشاهده
            </Button>
          </Wrap>
          <Center>
            <Button
              colorScheme="primary"
              w="fit-content"
              rounded="full"
              fontWeight="light"
              variant="outline"
              leftIcon={<BiCommentAdd />}
              onClick={() => handleAddReviewClick()}
            >
              ارسال نقد و بررسی
            </Button>
          </Center>
          {queries.reviewsLazyQuery?.loading ? (
            <ApiLoading />
          ) : (
            <Stack>
              {queries.reviewsLazyQuery?.data?.trip?.reviewsOfTrip?.edges
                .length != 0 ? (
                queries.reviewsLazyQuery?.data?.trip?.reviewsOfTrip?.edges.map(
                  (item: any) => (
                    <TravelogueReview key={item.node?.id} {...item.node} />
                  )
                )
              ) : (
                <EmptyResult title="نقدی" />
              )}
            </Stack>
          )}
        </Stack>
        <AddReviewModal
          {...addReviewModal}
          actions={actions}
          status={queries.addReviewStatus}
          contentId={data?.trip?.id!}
        />
      </Wrap>

      <Box h="5vh" />
    </>
  );
}
