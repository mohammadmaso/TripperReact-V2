import { Stack, Wrap, Text, Box, Divider, Image, Flex } from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiEye, FiUsers } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import {
  ExperienceType,
  ExperienceTypeEdge,
  TripActivitieType,
} from '../../../graphql/generated/types';
import { IImage } from '../../ImageGallery';
import ImageList from '../../ImageList';
import AddEditButton from './AddEditButton';
import { ActivityCard } from '../../cards/ActivityCard';

interface Props {
  experiences: ExperienceTypeEdge[];
  onAddButtonClick: () => void;
  imageOnClick: any;
}
interface CardProps {
  experience: ExperienceType;
  imageOnClick: any;
}
function ExperienceCard({ experience, imageOnClick }: CardProps) {
  const images = experience.images.edges.map(
    (i: any) =>
      ({
        id: i?.node?.id,
        description: i?.node?.description,
        image: i?.node?.image,
      } as IImage)
  ) as IImage[];
  return (
    <Box borderRadius="lg" borderWidth="thin" w="full" minH="7rem" p="2">
      <Stack spacing="0.5">
        <Flex justify="space-between">
          <Stack>
            <Text>{experience.title}</Text>
            <Wrap fontSize="xs" align="center">
              <HiLocationMarker />
              <Text>{experience.place.name}</Text>
            </Wrap>
          </Stack>
          <Wrap spacing="0">
            {experience.activities?.edges.map((item) => (
              <ActivityCard
                key={item?.node?.id as string}
                svg={item?.node?.svg as string}
                title={item?.node?.titleFa as string}
                id={item?.node?.id as string}
                size={2}
              />
            ))}
          </Wrap>
        </Flex>

        <Wrap fontSize="sm" fontWeight="light" p="2">
          <Divider />

          <ImageList images={images} imageOnClick={imageOnClick} />

          <Text>{experience.description}</Text>
        </Wrap>
      </Stack>
    </Box>
  );
}

export const EditTravelogueExperiences = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiEye />
        <Text fontWeight="extrabold">تجربه‌ها</Text>
        <AddEditButton onClick={props.onAddButtonClick} mode="add" />
      </Wrap>
      <Stack spacing="2">
        {props.experiences?.map((item) => (
          <ExperienceCard
            key={item?.node?.id}
            experience={item?.node as ExperienceType}
            imageOnClick={props.imageOnClick}
          />
        ))}
      </Stack>
    </Stack>
  );
};
