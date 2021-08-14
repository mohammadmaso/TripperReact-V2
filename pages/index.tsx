import React from 'react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';
import TripCarousal from '../componenets/carousals/TripCarousal';
import WikiCarusal from '../componenets/carousals/WikiCarousal';
import CallToActionCreateGroupTrip from '../componenets/landing/CallToActionCreateGroupTrip';
import CallToActionWithVideo from '../componenets/landing/CallToActionWithVideo';

import BaseLayout from '../layouts/BaseLayout';
import LastArticlesView from '../views/article/LastArticlesView';
import LastTripsView from '../views/trip/LastTripsView';
import TripCategoriesView from '../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout>
      <CallToActionWithVideo />
      <LastTripsView />
      <TripCategoriesView />
      <CallToActionCreateGroupTrip />
      <LastArticlesView />
    </BaseLayout>
  );
}
