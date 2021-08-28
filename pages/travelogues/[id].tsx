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
import { TravelogueAccomodations } from '../../componenets/travelogue/TravelogueAccomodations';
import { TravelogueMap } from '../../componenets/travelogue/TravelogueMap';
import { TravelogueHeader } from '../../componenets/travelogue/TravelogueHeader';
import { TravelogueGallery } from '../../componenets/travelogue/TravelogueGallery';
import { TravelogueDescription } from '../../componenets/travelogue/TravelogueDescription';
import TravelogueCompanions from '../../componenets/travelogue/TravelogueCompanions';
import { TravelogueExperiences } from '../../componenets/travelogue/TravelogueExperiences';
import { TraveloguePlaces } from '../../componenets/travelogue/TraveloguePlaces';
import TravelogueAccessories from '../../componenets/travelogue/TravelogueAccessories';
import { Transfers } from '../../componenets/travelogue/TravelogueTransfers';
import TravelogueActivities from '../../componenets/travelogue/TravelogueActivities';
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
