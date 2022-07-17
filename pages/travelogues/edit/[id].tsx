import { useRouter } from 'next/router';
import React from 'react';
import InitTravelogue from '../../../components/travelogue/addTravelogue/InitTravelogue';
import BaseLayout from '../../../layouts/BaseLayout';
import EditTravelogueView from '../../../views/trip/EditTravelogueView';
import InitTravelogueView from '../../../views/trip/InitTravelogueView';

export default function Home() {
  const router = useRouter();

  return (
    <BaseLayout title="ویرایش سفرنامه">
      <EditTravelogueView id={router.query.id! as string} />
    </BaseLayout>
  );
}
