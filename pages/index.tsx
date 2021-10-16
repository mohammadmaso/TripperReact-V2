import { Wrap, Box, Stack } from '@chakra-ui/react';
import React from 'react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import TripCarousal from '../componenets/carousals/TripCarousal';
import WikiCarusal from '../componenets/carousals/WikiCarousal';
import CallToActionCreateGroupTrip from '../componenets/landing/CallToActionCreateGroupTrip';
import CallToActionWithVideo from '../componenets/landing/CallToActionWithVideo';
import MapCTA from '../componenets/landing/MapCTA';
import LandingGallery from '../componenets/landing/Slider';
import ToureCard1 from '../componenets/landing/toureCard1';
import TourLeaderCTA from '../componenets/landing/TourLeaderCTA';
import TriAngleNatureBanner from '../componenets/landing/triAngleNature';

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
