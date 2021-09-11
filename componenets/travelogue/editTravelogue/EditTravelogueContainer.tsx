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
  Slide,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import BaseLayout from '../../../layouts/BaseLayout';
import { EditTravelogueAccomodations } from './EditTravelogueAccomodations';
import { EditTravelogueMap } from './EditTravelogueMap';
import { EditTravelogueHeader } from './EditTravelogueHeader';
import { EditTravelogueGallery } from './EditTravelogueGallery';
import { EditTravelogueDescription } from './EditTravelogueDescription';
import EditTravelogueCompanions from './EditTravelogueCompanions';
import { EditTravelogueExperiences } from './EditTravelogueExperiences';
import { EditTraveloguePlaces } from './EditTraveloguePlaces';
import EditTravelogueAccessories from './EditTravelogueAccessories';
import EditTravelogueTransfers from './EditTravelogueTransfers';
import EditTravelogueActivities from './EditTravelogueActivities';
import {
  AccessoryType,
  AccessoryTypeEdge,
  ExperienceTypeEdge,
  TransferType,
  TripActivitieType,
  TripActivitieTypeEdge,
  TripDetailQuery,
  TripType,
  UserType,
  UserTypeConnection,
  UserTypeEdge,
} from '../../../graphql/generated/types';
import ApiLoading from '../../ApiLoading';

import EmptyResult from '../../EmptyResult';
import { BiComment, BiCommentAdd } from 'react-icons/bi';
import useIsSignedIn from '../../../hooks/useIsSignedIn';
import ImageGallery, { IImage } from '../../ImageGallery';
import EditInitTravelogue from './EditInitTravelogue';
import AddCompanionModal from './Modals/AddCompanionModal';
import AddAccessoryModal from './Modals/AddAccessoryModal';

import _ from 'lodash';
import { FiSave } from 'react-icons/fi';
import ActivitiesModal from './Modals/ActivitiesModal';
import AddTransferModal from './Modals/AddTransferModal';

interface Props {
  data: TripDetailQuery;
  actions?: any;
  queries?: any;
}

export default function EditTravelogueContainer({
  data,
  queries,
  actions,
}: Props) {
  const isSignedIn = useIsSignedIn();
  const toast = useToast();
  const lighBox = useDisclosure();
  const [imageIdToShow, setImageIdToShow] = useState<string>('0');

  const editeInitModal = useDisclosure();
  const selectActivitiesModal = useDisclosure();
  const addTransferModal = useDisclosure();
  const addAccomodationModal = useDisclosure();
  const addExperienceModal = useDisclosure();
  const addAccessoryModal = useDisclosure();
  const addCompanionModal = useDisclosure();
  const saveBox = useDisclosure();

  const showImage = (id: string) => {
    //set imageToShow to be the one that's been clicked on
    setImageIdToShow(id);
    //set lightbox visibility to true
    lighBox.onOpen();
  };

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

  const [tripDataToAdd, setTripDataToAdd] = useState<{
    [key: string]: string[];
  }>({
    images: [],
    companions: [],
    activities: [],
    accessories: [],
    places: [],
    experiences: [],
    transfers: [],
  });

  const [tripDataToDelete, setTripDataToDelete] = useState<{
    [key: string]: string[];
  }>({
    images: [],
    companions: [],
    activities: [],
    accessories: [],
    places: [],
    experiences: [],
    transfers: [],
  });

  const [initialTripData, setInitialTripData] = useState<{
    [key: string]: any;
  }>({
    ...data.trip,
    images: data.trip?.images.edges,
    companions: data.trip?.companions.edges,
    activities: data.trip?.activities.edges,
    accessories: data.trip?.accessories.edges,
    places: data.trip?.places.edges,
    transfers: data.trip?.transfers.edges,
    experiences: data.trip?.experiences?.edges,
  });

  const [tripData, setTripData] = useState<{
    [key: string]: any;
  }>({
    ...data.trip,
    images: data.trip?.images.edges,
    companions: data.trip?.companions.edges,
    activities: data.trip?.activities.edges,
    accessories: data.trip?.accessories.edges,
    places: data.trip?.places.edges,
    transfers: data.trip?.transfers.edges,
    experiences: data.trip?.experiences?.edges,
  });

  const createDiffTripRelativeData = () => {
    let toAddIds: {
      [key: string]: any[];
    } = {};
    let toDeleteIds: {
      [key: string]: any[];
    } = {};
    for (let key in tripData) {
      if (Array.isArray(tripData[key])) {
        toAddIds[key] = _.differenceBy(
          tripData[key],
          initialTripData[key],
          'node.id'
        ).map((item: any) => item?.node?.id);
      }
    }
    for (let key in tripData) {
      if (Array.isArray(tripData[key])) {
        toDeleteIds[key] = _.differenceBy(
          initialTripData[key],
          tripData[key],
          'node.id'
        ).map((item: any) => item?.node?.id);
      }
    }

    for (let key in toAddIds) {
      if (toAddIds[key].length == 0) {
        delete toAddIds[key];
      }
    }
    for (let key in toDeleteIds) {
      if (toDeleteIds[key].length == 0) {
        delete toDeleteIds[key];
      }
    }
    console.log(toAddIds);
    console.log(toDeleteIds);
    return { toAddIds, toDeleteIds };
  };

  const onSaveTrip = () => {
    const { toAddIds, toDeleteIds } = createDiffTripRelativeData();
    actions
      .updateTrip({
        tripId: data.trip?.id as string,
        tripRelatedData: {
          ...toAddIds,
        },
        removeTripRelatedData: {
          ...toDeleteIds,
        },
      })
      .then((res: any) => {
        if (res.data?.updateTrip?.success == true) {
          saveBox.onClose();
          setInitialTripData(tripData);
        }
        if (res.data?.updateTrip?.success == false) {
          toast({
            title: 'خطا در بروزرسانی سفر',
            status: 'error',
            duration: 8000,
            isClosable: true,
            position: 'top-right',
          });
        }
      });
  };

  useEffect(() => {
    if (!_.isEqual(tripData, initialTripData)) {
      saveBox.onOpen();
    }
    if (_.isEqual(tripData, initialTripData)) {
      saveBox.onClose();
    }
  }, [tripData, saveBox, initialTripData]);

  useEffect(() => {
    if (!_.isEqual(tripData, initialTripData)) {
      window.addEventListener('beforeunload', alertUser);
    }
    // window.addEventListener('unload', handleTabClosing);}
    return () => {
      window.removeEventListener('beforeunload', alertUser);
      // window.removeEventListener('unload', handleTabClosing);
    };
  }, [tripData, saveBox, initialTripData]);

  // const handleTabClosing = () => {
  //   removePlayerFromGame();
  // };

  const alertUser = (event: any) => {
    event.preventDefault();
    event.returnValue = '';
  };

  return (
    <>
      <Wrap direction="column">
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="1">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4" w="full">
              <EditTravelogueGallery
                images={tripImages}
                // videos={data?.trip?.videos.edges}
                imageOnClick={(id: string) => showImage(id)}
              />

              <Divider />
              <EditTravelogueAccomodations />
              <Divider />
              <EditTravelogueTransfers
                onAddButtonClick={addTransferModal.onOpen}
                transfers={tripData.transfers}
                onDeleteClick={(id: string) => {
                  setTripData((prevState) => ({
                    ...prevState,
                    transfers: prevState?.transfers?.filter(
                      (item: any) => item?.node?.id !== id
                    ),
                  }));
                  // TODO: delete transfer api call
                }}
              />

              <Divider />
              <EditTraveloguePlaces places={tripData?.places} />

              <Divider color="gray.800" />
              <EditTravelogueDescription
                description={tripData?.description as string}
                onAddButtonClick={editeInitModal.onOpen}
              />

              <Divider />
              <EditTravelogueExperiences
                experiences={tripData?.experiences as ExperienceTypeEdge[]}
                imageOnClick={(id: string) => showImage(id)}
              />

              <Divider />
              <EditTravelogueCompanions
                companions={tripData?.companions!}
                onAddButtonClick={addCompanionModal.onOpen}
                onDeleteClick={(id: string) => {
                  setTripData((prevState) => ({
                    ...prevState,
                    companions: prevState?.companions?.filter(
                      (item: any) => item?.node?.id !== id
                    ),
                  }));
                  // setTripDataToDelete((prev) => ({
                  //   ...prev,
                  //   companions: [...prev.companions, id],
                  // }));
                }}
              />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4" w="full">
              <EditTravelogueMap />

              <Divider />
              <EditTravelogueActivities
                onAddButtonClick={selectActivitiesModal.onOpen}
                activities={tripData?.activities}
              />

              <Divider />
              <EditTravelogueAccessories
                onAddButtonClick={addAccessoryModal.onOpen}
                accessories={tripData?.accessories! as AccessoryTypeEdge[]}
                onDeleteClick={(id: string) => {
                  setTripData((prevState) => ({
                    ...prevState,
                    accessories: prevState?.accessories?.filter(
                      (item: any) => item?.node?.id !== id
                    ),
                  }));

                  // setTripDataToDelete((prev) => ({
                  //   ...prev,
                  //   accessories: [...prev.accessories, id],
                  // }));
                }}
              />
            </Stack>
          </Wrap>
        </Flex>
        <Divider />
      </Wrap>
      <ImageGallery
        {...lighBox}
        imageIdToShow={imageIdToShow}
        images={images}
        user={data.trip?.author}
      />
      <EditInitTravelogue
        data={data}
        actions={{
          updateTrip: actions.updateTrip,
          getProvincesOfCountry: actions.getProvincesOfCountry,
        }}
        queries={queries}
        {...editeInitModal}
      />
      <AddCompanionModal
        queries={{ ...queries }}
        actions={{ ...actions }}
        selected={tripData.companions as UserTypeEdge[]}
        {...addCompanionModal}
        onAddUser={(user: UserType) => {
          setTripData((prevState) => ({
            ...prevState,
            companions: [
              ...(prevState.companions as Array<any>),
              { node: user },
            ],
          }));
          // setTripDataToAdd((prev) => ({
          //   ...prev,
          //   companions: [...prev.companions, user.id],
          // }));
        }}
      />
      <AddAccessoryModal
        queries={{ ...queries }}
        actions={{ ...actions }}
        selected={tripData.accessories as AccessoryTypeEdge[]}
        {...addAccessoryModal}
        onAddAccessory={(accessory: AccessoryType) => {
          setTripData((prevState) => ({
            ...prevState,
            accessories: [
              ...(prevState.accessories as Array<any>),
              { node: accessory },
            ],
          }));
          // setTripDataToAdd((prev) => ({
          //   ...prev,
          //   accessories: [...prev.accessories, accessory.id],
          // }));
        }}
      />
      <ActivitiesModal
        queries={{ ...queries }}
        actions={{ ...actions }}
        selected={tripData.activities as TripActivitieTypeEdge[]}
        {...selectActivitiesModal}
        onAddActivity={(activity: TripActivitieType) => {
          setTripData((prevState) => ({
            ...prevState,
            activities: [
              ...(prevState.activities as Array<any>),
              { node: activity },
            ],
          }));
        }}
        onDeleteActivity={(id: string) => {
          setTripData((prevState) => ({
            ...prevState,
            activities: prevState?.activities?.filter(
              (item: any) => item?.node?.id !== id
            ),
          }));
        }}
      />

      <AddTransferModal
        queries={{ ...queries }}
        actions={{ ...actions }}
        selected={tripData.activities as TripActivitieTypeEdge[]}
        {...addTransferModal}
        onAddTransfer={(transfer: TransferType) => {
          setTripData((prevState) => ({
            ...prevState,
            transfers: [
              ...(prevState.transfers as Array<any>),
              { node: transfer },
            ],
          }));
        }}
        onDeleteActivity={(id: string) => {
          setTripData((prevState) => ({
            ...prevState,
            activities: prevState?.activities?.filter(
              (item: any) => item?.node?.id !== id
            ),
          }));
        }}
      />

      <Slide direction="bottom" in={saveBox.isOpen} style={{ zIndex: 10 }}>
        <Button
          p="40px"
          mt="4"
          colorScheme="primary"
          rounded="none"
          isFullWidth={true}
          leftIcon={<FiSave />}
          isLoading={queries?.updateTripStatus?.loading}
          onClick={onSaveTrip}
        >
          ذخیره تغییرات
        </Button>
      </Slide>
      <Box h="5vh" />
    </>
  );
}
