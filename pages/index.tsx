import React from 'react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import TripCarousal from '../componenets/carousals/TripCarousal';
import WikiCarusal from '../componenets/carousals/WikiCarousal';
import CallToActionCreateGroupTrip from '../componenets/landing/CallToActionCreateGroupTrip';
import CallToActionWithVideo from '../componenets/landing/CallToActionWithVideo';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <CallToActionWithVideo />
      <TripCarousal />
      <CategoryCarousal />
      <CallToActionCreateGroupTrip />
      <WikiCarusal />
    </BaseLayout>
  );
}
