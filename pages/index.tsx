import { Wrap, Box, Stack } from '@chakra-ui/react';
import React from 'react';
import CategoryCarousal from '../components/carousals/CategoryCarousal';
import TripCarousal from '../components/carousals/TripCarousal';
import WikiCarusal from '../components/carousals/WikiCarousal';
import CallToActionCreateGroupTrip from '../components/landing/CallToActionCreateGroupTrip';
import CallToActionWithVideo from '../components/landing/CallToActionWithVideo';
import MapCTA from '../components/landing/MapCTA';
import LandingGallery from '../components/landing/Slider';
import ToureCard1 from '../components/landing/toureCard1';
import TourLeaderCTA from '../components/landing/TourLeaderCTA';
import TriAngleNatureBanner from '../components/landing/triAngleNature';

import BaseLayout from '../layouts/BaseLayout';
import LastArticlesView from '../views/article/LastArticlesView';
import TourCategoriesView from '../views/tour/TourCategoriesView';
import LastTripsView from '../views/trip/LastTripsView';
import TripCategoriesView from '../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout>
      <Stack spacing="10">
        {/* <LandingGallery /> */}
        <MapCTA />
        {/* <Box h={['20px', '20px', '40px']} /> */}
        <TourLeaderCTA />
        {/* <ToureCard1 /> */}
        {/* <CallToActionWithVideo /> */}
        <TourCategoriesView />
        <LastTripsView />
        <TripCategoriesView />
        {/* <TriAngleNatureBanner /> */}
        {/* <CallToActionCreateGroupTrip /> */}
        <LastArticlesView />
      </Stack>
    </BaseLayout>
  );
}
