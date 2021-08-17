import React from 'react';
import CategoryCarousal from '../../componenets/carousals/CategoryCarousal';
import GroupTripCarousal from '../../componenets/carousals/GroupTripCarousal';
import CallToActionCreateGroupTrip from '../../componenets/landing/CallToActionCreateGroupTrip';
import BaseLayout from '../../layouts/BaseLayout';
import TripCategoriesView from '../../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout title="همسفر">
      <CallToActionCreateGroupTrip />
      <TripCategoriesView />
      <GroupTripCarousal />
    </BaseLayout>
  );
}
