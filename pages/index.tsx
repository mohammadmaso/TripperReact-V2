import { Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import MapCTA from '../components/landing/MapCTA';
import TourLeaderCTA from '../components/landing/TourLeaderCTA';

import BaseLayout from '../layouts/BaseLayout';
import LastArticlesView from '../views/article/LastArticlesView';
import LastTripsView from '../views/trip/LastTripsView';
import TripCategoriesView from '../views/trip/TripCategoriesView';
const ReactGlobe = dynamic(() => import('../components/globe'), {
  ssr: false,
});

export default function Home() {
  return (
    <BaseLayout>
      <Stack spacing="10">
        {/* <LandingGallery /> */}
        {/* <ReactGlobe /> */}
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
