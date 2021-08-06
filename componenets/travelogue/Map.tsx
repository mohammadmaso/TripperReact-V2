import { Stack, Wrap, Text } from '@chakra-ui/react';
import React from 'react';
import ReactMapGL from 'react-map-gl';
import { FiMap } from 'react-icons/fi';

export function Map(props: any) {
  return (
    <Stack>
      <Wrap align="center">
        <FiMap />
        <Text>نقشه سفر</Text>
      </Wrap>
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
        {...props.viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        width="100%"
        height="500px"
        onViewportChange={(viewport: any) => props.setViewport(viewport)}
      />
    </Stack>
  );
}
