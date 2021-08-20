import { Stack, Wrap, Text, Box, Divider, Image, Flex } from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiEye, FiUsers } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

interface Props {
  experiences: any;
}

function ExperienceCard(props: any) {
  return (
    <Box borderRadius="lg" borderWidth="thin" w="full" minH="7rem" p="2">
      <Stack spacing="0.5">
        <Flex justify="space-between">
          <Stack>
            <Text>{props.title}</Text>
            <Wrap fontSize="xs" align="center">
              <HiLocationMarker />
              <Text>{props.place.name}</Text>
            </Wrap>
          </Stack>
          <Wrap>
            <Image
              src={props.defaultImage}
              rounded="md"
              alt={props.place.name}
            />
          </Wrap>
        </Flex>

        <Wrap fontSize="sm" fontWeight="light" p="2">
          <Divider />
          <Text>{props.description}</Text>
        </Wrap>
      </Stack>
    </Box>
  );
}

export const TravelogueExperiences = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiEye />
        <Text>تجربه‌ها</Text>
      </Wrap>
      <Stack spacing="2">
        {props.experiences?.map((item: any) => (
          <ExperienceCard key={item?.node?.id} {...item?.node} />
        ))}
      </Stack>
    </Stack>
  );
};
