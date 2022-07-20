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
  Icon,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import { TravelogueAccomodations } from './TravelogueAccomodations';
import { TravelogueMap } from './TravelogueMap';
import { TravelogueHeader } from './TravelogueHeader';
import { TravelogueGallery } from './TravelogueGallery';
import { TravelogueDescription } from './TravelogueDescription';
import TravelogueCompanions from './TravelogueCompanions';
import { TravelogueExperiences } from './TravelogueExperiences';
import { TraveloguePlaces } from './TraveloguePlaces';
import TravelogueAccessories from './TravelogueAccessories';
import { Transfers } from './TravelogueTransfers';
import TravelogueActivities from './TravelogueActivities';
import { TripDetailQuery, TripImageType } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import TravelogueReview from './TravelogueReview';

import EmptyResult from '../EmptyResult';
import { BiComment, BiCommentAdd, BiPlus, BiPlusCircle } from 'react-icons/bi';
import useIsSignedIn from '../../hooks/useIsSignedIn';
import AddReviewModal from '../Modals/AddReviewModal';
import ImageGallery, { IImage } from '../ImageGallery';

interface Props {
  data: TripDetailQuery;
  actions: any;
  queries: any;
}

export default function TravelogueContainer({ data, queries, actions }: Props) {
  const isSignedIn = useIsSignedIn();
  const toast = useToast();
  const addReviewModal = useDisclosure();

  const lighBox = useDisclosure();

  useEffect(() => {
    actions.getReviews();
  }, []);

  const [imageIdToShow, setImageIdToShow] = useState<string>('0');

  const experiencesEdges = data.trip?.experiences?.edges.map(
    (experience) => experience?.node?.images.edges
  );

  const experiencesImagesArray = experiencesEdges?.map(
    (item) =>
      item?.map(
        (i) =>
          ({
            id: i?.node?.id,
            description: i?.node?.description,
            image: i?.node?.image,
          } as IImage)
      ) as IImage[]
  ) as IImage[][];
  const experiencesImages = experiencesImagesArray.flat();

  const tripImages = [
    {
      id: '0',
      image: data.trip?.defaultImage!,
      description: data.trip?.description!,
    },

    ...(data.trip?.images.edges.map((item) => ({
      id: item?.node?.id,
      description: item?.node?.description!,
      image: item?.node?.image!,
    })) as IImage[]),
  ];

  const [images, setImages] = useState<IImage[]>([
    ...tripImages,
    ...experiencesImages,
  ]);

  // console.log(experiencesImages);
  // console.log(images);

  const showImage = (id: string) => {
    //set imageToShow to be the one that's been clicked on
    setImageIdToShow(id);
    //set lightbox visibility to true
    lighBox.onOpen();
  };

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
                  images={tripImages}
                  imageOnClick={(id: string) => showImage(id)}
                  // videos={data?.trip?.videos.edges}
                />
              )}

              <Divider />
              <TravelogueAccomodations />
              <Divider />
              <Transfers transfers={data.trip?.transfers.edges} />

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
                    imageOnClick={(id: string) => showImage(id)}
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
              <TravelogueMap data={data} />

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
            <Text fontWeight="extrabold">نقد و بررسی‌ها</Text>
            {/* <Button size="sm" onClick={actions.getReviews}>
              مشاهده
            </Button> */}
            {/* <Button
              colorScheme="primary"
              w="fit-content"
              rounded="full"
              fontWeight="light"
              variant="solid"
              leftIcon={<BiPlusCircle />}
              onClick={() => handleAddReviewClick()}
            ></Button> */}
            <Icon
              as={BiPlusCircle}
              onClick={() => handleAddReviewClick()}
              color="primary"
            />
          </Wrap>
          {/* <Center>
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
          </Center> */}
          {queries.reviewsLazyQuery?.loading ? (
            <ApiLoading enhanced={true} />
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

      <ImageGallery
        {...lighBox}
        imageIdToShow={imageIdToShow}
        images={images}
        user={data.trip?.author}
      />

      <Box h="5vh" />
    </>
  );
}
