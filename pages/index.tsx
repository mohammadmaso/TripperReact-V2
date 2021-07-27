import React from 'react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import TripCarousal from '../componenets/carousals/TripCarousal';
import WikiCarusal from '../componenets/carousals/WikiCarousal';
import CallToActionWithVideo from '../componenets/landing/CallToActionWithVideo';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <CallToActionWithVideo />
        <TripCarousal />
        <CategoryCarousal />
        <WikiCarusal />
      </div>
    </BaseLayout>
  );
}
