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
import { EditTransfers } from './EditTravelogueTransfers';
import EditTravelogueActivities from './EditTravelogueActivities';
import { TripDetailQuery } from '../../../graphql/generated/types';
import ApiLoading from '../../ApiLoading';

import EmptyResult from '../../EmptyResult';
import { BiComment, BiCommentAdd } from 'react-icons/bi';
import useIsSignedIn from '../../../hooks/useIsSignedIn';

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

  return (
    <>
      <Wrap direction="column">
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="1">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4" w="full">
              {data?.trip?.images.edges.length != 0 && (
                <EditTravelogueGallery
                  images={data?.trip?.images.edges!}
                  // videos={data?.trip?.videos.edges}
                />
              )}

              <Divider />
              <EditTravelogueAccomodations />
              <Divider />
              <EditTransfers />

              {data?.trip?.places.edges.length != 0 && (
                <>
                  <Divider />
                  <EditTraveloguePlaces places={data?.trip?.places.edges} />
                </>
              )}
              {data?.trip?.description && (
                <>
                  <Divider />
                  <EditTravelogueDescription
                    description={data?.trip?.description}
                  />
                </>
              )}

              {data?.trip?.experiences?.edges.length != 0 && (
                <>
                  <Divider />
                  <EditTravelogueExperiences
                    experiences={data?.trip?.experiences?.edges!}
                  />
                </>
              )}

              {data?.trip?.companions.edges.length != 0 && (
                <>
                  <Divider />
                  <EditTravelogueCompanions
                    companions={data?.trip?.companions.edges!}
                  />
                </>
              )}
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4" w="full">
              <EditTravelogueMap />

              {data?.trip?.activities.edges.length != 0 && (
                <>
                  <Divider />
                  <EditTravelogueActivities
                    activities={data?.trip?.activities.edges!}
                  />
                </>
              )}

              {data?.trip?.accessories.edges.length != 0 && (
                <>
                  <Divider />
                  <EditTravelogueAccessories
                    accessories={data?.trip?.accessories.edges}
                  />
                </>
              )}
            </Stack>
          </Wrap>
        </Flex>
        <Divider />
      </Wrap>

      <Box h="5vh" />
    </>
  );
}
