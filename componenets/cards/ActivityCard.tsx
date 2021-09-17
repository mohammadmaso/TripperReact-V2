import {
  Center,
  Stack,
  Text,
  Image,
  Img,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { TripActivitieType } from '../../graphql/generated/types';
interface Props {
  id: string;
  title: string;
  svg: string;
  size?: number;
  isSelected?: boolean;
  showText?: boolean;
  onToggle?: (activity: TripActivitieType | string) => void;
}

export function ActivityCard(props: Props) {
  return (
    <Center
      p="3"
      rounded="sm"
      // shadow="sm"
      _hover={{ transform: 'scale(1.1,1.1)' }}
      transition={'all .3s ease'}
      borderWidth={props.isSelected ? 'medium' : '0'}
      borderColor="green.400"
      borderRadius="md"
    >
      <Stack align="center" justify="space-between" textAlign={'center'}>
        <Img
          w={props.size ? `${props.size}rem` : '4rem'}
          h={props.size ? `${props.size}rem` : '4rem'}
          src={props.svg}
          objectFit="scale-down"
          alt={props.title}
          onClick={() => {
            props.onToggle
              ? props.isSelected
                ? props.onToggle(props.id as string)
                : props.onToggle({
                    id: props.id,
                    svg: props.svg,
                    titleFa: props.title,
                  } as TripActivitieType)
              : null;
          }}
          filter={useColorModeValue(
            'invert(25%) sepia(68%) saturate(0%) hue-rotate(296deg) brightness(96%) contrast(102%)',
            'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
          )}
        />
        {props.showText && <Text fontSize="xs">{props.title}</Text>}
      </Stack>
    </Center>
  );
}

ActivityCard.defaultProps = { showText: true };
