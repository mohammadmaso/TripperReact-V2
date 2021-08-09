import { Stack, Wrap, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { FiMap } from 'react-icons/fi';

export function TravelogueMap(props: any) {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <Stack>
      <Wrap align="center">
        <FiMap />
        <Text>نقشه سفر</Text>
      </Wrap>
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
        {...viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        width="100%"
        height="500px"
        onViewportChange={(viewport: any) => setViewport(viewport)}
      />
    </Stack>
  );
}
