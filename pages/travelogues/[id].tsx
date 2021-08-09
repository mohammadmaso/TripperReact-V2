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

export default function Travelogue() {
  return (
    <BaseLayout title="سفر به شیراز" subNav={<TravelogueHeader />}>
      <Wrap>
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="1">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <TravelogueGallery />
              <Divider />
              <TravelogueAccomodations />
              <Divider />
              <Transfers />
              <Divider />
              <TraveloguePlaces />
              <Divider />
              <TravelogueDescription />
              <Divider />
              <TravelogueExperiences />
              <Divider />
              <TravelogueCompanions />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <TravelogueMap />
              <Divider />
              <TravelogueActivities />
              <Divider />
              <TravelogueAccessories />
            </Stack>
          </Wrap>
        </Flex>
      </Wrap>
      <Box h="5vh" />
    </BaseLayout>
  );
}
