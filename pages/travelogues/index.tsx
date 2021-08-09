import { Button, Divider, Wrap } from '@chakra-ui/react';
import React from 'react';
import { FcNext } from 'react-icons/fc';
import { FiArrowDown } from 'react-icons/fi';
import TripListCard from '../../componenets/cards/TripListCard';
import { TravelogueListHeader } from '../../componenets/travelogue/TravelogueListHeader';

import BaseLayout from '../../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title="سفر‌نامه‌ها" subNav={<TravelogueListHeader />}>
      <Wrap spacing="3" mb="4" justify="center">
        <Divider />
        <TripListCard />
        <TripListCard />
        <TripListCard />
        <Button
          colorScheme="primary"
          rounded="full"
          rightIcon={<FiArrowDown />}
        >
          نتایج بیشتر
        </Button>
      </Wrap>
    </BaseLayout>
  );
}
