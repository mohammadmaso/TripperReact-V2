import { AtSignIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { FiPhone, FiLink } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import ReactMapGL, { Marker } from 'react-map-gl';
import { SocialButtons } from '../componenets/SocialButtons';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing="5">
        <Center p="4" rounded="lg" shadow="lg">
          <Stack fontSize="sm">
            <Wrap justify="space-between">
              <Wrap align="center">
                <FiPhone />
                <Text fontWeight="bold">شماره تلفن</Text>
              </Wrap>
              <Link href="tel:+989380374660" dir="ltr">
                +۹۸۹۳۸۰۳۷۴۶۶۰
              </Link>
            </Wrap>
            <Divider />
            <Wrap justify="space-between">
              <Wrap align="center">
                <HiLocationMarker />
                <Text fontWeight="bold">آدرس</Text>
              </Wrap>
              <Text dir="ltr">
                ایران، تهران، دانشکده‌ مهندسی برق دانشگاه خواجه‌نصیر
              </Text>
            </Wrap>
            <Divider />
            <Wrap justify="space-between">
              <Wrap align="center">
                <AtSignIcon />
                <Text fontWeight="bold">ایمیل</Text>
              </Wrap>
              <Link dir="ltr">support@mytripper.ir</Link>
            </Wrap>
            <Divider />
            <Wrap justify="center">
              <SocialButtons />
            </Wrap>
          </Stack>
        </Center>
        <Box p="0" rounded="lg" shadow="lg">
          <ReactMapGL
            mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            width="100%"
            height="500px"
            longitude={51.4482906}
            latitude={35.7407193}
            zoom={15}
          >
            <Marker
              longitude={51.4482906}
              latitude={35.7407193}
              offsetTop={-30}
            >
              <Icon
                as={HiLocationMarker}
                h="40px"
                w="40px"
                color="primary.500"
              />
            </Marker>
          </ReactMapGL>
        </Box>
      </SimpleGrid>
    </BaseLayout>
  );
}
