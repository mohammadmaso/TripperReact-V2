import { Stack, Wrap, Text } from '@chakra-ui/react';
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { IoCloudyNight } from 'react-icons/io5';
import { ActivityCard } from '../cards/ActivityCard';

interface Props {}

const TravelogueActivities = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiActivity />
        <Text>فعالیت‌ها</Text>
      </Wrap>
      <Wrap>{/* <ActivityCard /> */}</Wrap>
    </Stack>
  );
};

export default TravelogueActivities;
