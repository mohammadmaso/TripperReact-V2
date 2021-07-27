import React from 'react';
import CategoryCarousal from '../../../componenets/carousals/CategoryCarousal';
import GroupTripCarousal from '../../../componenets/carousals/GroupTripCarousal';
import CallToActionCreateGroupTrip from '../../../componenets/landing/CallToActionCreateGroupTrip';

import BaseLayout from '../../../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout title="همسفر | تریپر ">
      <CallToActionCreateGroupTrip />
      <CategoryCarousal />
      <GroupTripCarousal />
    </BaseLayout>
  );
}
