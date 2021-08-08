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
import { FaHome, FaLocationArrow } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { IoPin } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import CategoryCard from '../../../componenets/cards/CategoryCard';

import BaseLayout from '../../../layouts/BaseLayout';
import { Accomodations } from '../../../componenets/travelogue/Accomodations';
import { Map } from '../../../componenets/travelogue/Map';
import { Header } from '../../../componenets/travelogue/Header';
import { Gallery } from '../../../componenets/travelogue/Gallery';
import { Description } from '../../../componenets/travelogue/Description';
import Companions from '../../../componenets/travelogue/Companions';
import { Experiences } from '../../../componenets/travelogue/Experiences';
import { Places } from '../../../componenets/travelogue/Places';
import Accessories from '../../../componenets/travelogue/Accessories';
import { Transfers } from '../../../componenets/travelogue/Transfers';
import Activities from '../../../componenets/travelogue/Activities';

export default function Travelogue() {
  return (
    <BaseLayout title="سفر به شیراز" subNav={<Header />}>
      <Wrap>
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="1">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <Gallery />
              <Divider />
              <Accomodations />
              <Divider />
              <Transfers />
              <Divider />
              <Places />
              <Divider />
              <Description />
              <Divider />
              <Experiences />
              <Divider />
              <Companions />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <Map />
              <Divider />
              <Activities />
              <Divider />
              <Accessories />
            </Stack>
          </Wrap>
        </Flex>
      </Wrap>
      <Box h="5vh" />
    </BaseLayout>
  );
}
