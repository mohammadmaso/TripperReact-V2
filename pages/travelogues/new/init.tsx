import React from 'react';
import InitTravelogue from '../../../components/travelogue/addTravelogue/InitTravelogue';
import BaseLayout from '../../../layouts/BaseLayout';
import InitTravelogueView from '../../../views/trip/InitTravelogueView';

export default function Home() {
  return (
    <BaseLayout title="افزودن سفرنامه">
      <InitTravelogueView />
    </BaseLayout>
  );
}
