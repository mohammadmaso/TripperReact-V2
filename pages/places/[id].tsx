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
import React from 'react';
import PlaceActivities from '../../componenets/place/PlaceActivities';
import { PlaceDescription } from '../../componenets/place/PlaceDescription';
import PlaceFacilities from '../../componenets/place/PlaceFacilities';
import { PlaceGallery } from '../../componenets/place/PlaceGallery';
import { PlaceHeader } from '../../componenets/place/PlaceHeader';
import { PlaceInfo } from '../../componenets/place/PlaceInfo';

import BaseLayout from '../../layouts/BaseLayout';

export default function Travelogue() {
  return (
    <BaseLayout title="تخت جمشید" subNav={<PlaceHeader />}>
      <Wrap>
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="2">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <PlaceDescription />
              <Divider />
              <PlaceGallery />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack w="full" pr={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <PlaceActivities />
              <Divider />
              <PlaceFacilities />
              <Divider />
              <PlaceInfo />
              <Divider />
            </Stack>
          </Wrap>
        </Flex>
      </Wrap>
      <Box h="5vh" />
    </BaseLayout>
  );
}
