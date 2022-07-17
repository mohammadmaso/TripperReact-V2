import {
  Container,
  Flex,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Divider,
  TagRightIcon,
  TagLabel,
  Box,
  useEventListener,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import { TravelogueAccomodations } from '../../components/travelogue/TravelogueAccomodations';
import { TravelogueMap } from '../../components/travelogue/TravelogueMap';
import { TravelogueHeader } from '../../components/travelogue/TravelogueHeader';
import { TravelogueGallery } from '../../components/travelogue/TravelogueGallery';
import { TravelogueDescription } from '../../components/travelogue/TravelogueDescription';
import TravelogueCompanions from '../../components/travelogue/TravelogueCompanions';
import { TravelogueExperiences } from '../../components/travelogue/TravelogueExperiences';
import { TraveloguePlaces } from '../../components/travelogue/TraveloguePlaces';
import TravelogueAccessories from '../../components/travelogue/TravelogueAccessories';
import { Transfers } from '../../components/travelogue/TravelogueTransfers';
import TravelogueActivities from '../../components/travelogue/TravelogueActivities';
import TripView from '../../views/trip/TripView';
import router, { useRouter } from 'next/router';
import { client } from '../../graphql/ApolloLink';
import { TripDetailDocument } from '../../graphql/generated/types';
import { ApolloError } from '@apollo/client/core';

// interface Props {
//   data: any;
//   loading: boolean;
//   error: ApolloError | undefined;
// }
// export async function getServerSideProps(context: any) {
//   // Fetch data from external API

//   const { data, loading, error } = await client.query({
//     query: TripDetailDocument,
//     variables: { variables: { tripId: context.query.id } },
//   });
//   // Pass data to the page via props
//   return { props: { data, loading, error } };
// }

export default function Travelogue() {
  const router = useRouter();
  return (
    <BaseLayout>
      <TripView id={router.query.id! as string} />
    </BaseLayout>
  );
}
