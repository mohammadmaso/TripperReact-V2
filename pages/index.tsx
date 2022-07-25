import { Stack } from '@chakra-ui/react';
import MapCTA from '../components/landing/MapCTA';
import TourLeaderCTA from '../components/landing/TourLeaderCTA';

import BaseLayout from '../layouts/BaseLayout';
import LastArticlesView from '../views/article/LastArticlesView';
import LastTripsView from '../views/trip/LastTripsView';
import TripCategoriesView from '../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout>
      <Stack spacing="10">
        {/* <LandingGallery /> */}
        <MapCTA />
        {/* <ToureCard1 /> */}
        {/* <CallToActionWithVideo /> */}
        {/* <TourCategoriesView /> */}
        <TripCategoriesView />
        <LastTripsView />
        <TourLeaderCTA />
        {/* <TriAngleNatureBanner /> */}
        {/* <CallToActionCreateGroupTrip /> */}
        <LastArticlesView />
      </Stack>
    </BaseLayout>
  );
}
