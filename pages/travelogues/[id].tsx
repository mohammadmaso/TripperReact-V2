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
import TripView from '../../views/trip/TripView';
import { useRouter } from 'next/router';

export default function Travelogue() {
  const router = useRouter();
  return (
    <BaseLayout>
      <TripView id={router.query.id! as string} />
    </BaseLayout>
  );
}
