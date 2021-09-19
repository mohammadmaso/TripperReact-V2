import { Button, Divider, Wrap } from '@chakra-ui/react';
import React from 'react';
import { FcNext } from 'react-icons/fc';
import { FiArrowDown } from 'react-icons/fi';
import TripListCard from '../../componenets/cards/TripListCard';
import { TravelogueListHeader } from '../../componenets/travelogue/TravelogueListHeader';

import BaseLayout from '../../layouts/BaseLayout';
import TravelogueListView from '../../views/trip/TravelogueListView';

export default function Home() {
  return (
    <BaseLayout title="سفر‌نامه‌ها">
      <TravelogueListView />
    </BaseLayout>
  );
}
