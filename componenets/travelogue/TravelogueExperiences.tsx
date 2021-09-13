import { Stack, Wrap, Text, Box, Divider, Image, Flex } from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiEye, FiUsers } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { ExperienceType, PlaceType } from '../../graphql/generated/types';
import ImageCard from '../ImageCard';
import { IImage } from '../ImageGallery';

interface Props {
  experiences: any;
  imageOnClick: any;
}

interface cardProps {
  node:
    | (ExperienceType & {
        place: PlaceType;
      })
    | undefined;
  imageOnClick: () => void;
}

function ExperienceCard(props: cardProps) {
  return (
    <Box borderRadius="lg" borderWidth="thin" w="full" minH="7rem" p="2">
      <Stack spacing="0.5">
        <Flex justify="space-between">
          <Stack>
            <Text>{props.node?.title}</Text>
            {/* <Wrap fontSize="xs" align="center">
              <HiLocationMarker />
              <Text>{props.node?.place.name}</Text>
            </Wrap> */}
          </Stack>
        </Flex>
        <Wrap fontSize="sm" fontWeight="light" p="2">
          <Divider />
          <Text>{props.node?.description}</Text>
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
        <Text fontWeight="extrabold">تجربه‌ها</Text>
      </Wrap>
      <Stack spacing="2">
        {props.experiences?.map((item: any) => (
          <ExperienceCard
            key={item?.node?.id}
            node={item?.node}
            imageOnClick={props.imageOnClick}
          />
        ))}
      </Stack>
    </Stack>
  );
};
