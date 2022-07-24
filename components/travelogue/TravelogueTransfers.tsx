import { ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Flex,
  Stack,
  Wrap,
  Text,
  Center,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { BiSquareRounded, BiTransfer } from 'react-icons/bi';
import { FaCampground } from 'react-icons/fa';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { MdFlightTakeoff, MdPlace } from 'react-icons/md';
import { TransferType, TransferTypeEdge } from '../../graphql/generated/types';
interface Props {
  transfers: any;
}
interface CardProps extends TransferType {
  key?: React.Key | null | undefined;
}
export function TravelogueTransferCard(props: CardProps) {
  return (
    <Flex
      justifyContent="space-between"
      borderRadius="full"
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      fontSize="xs"
      h="2.2rem"
      align="center"
    >
      <Center h="2rem" w="2rem" borderRadius="full" bgColor="yellow.400">
        <Image
          filter={
            'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
          }
          h="15"
          w="15"
          src={props.transferType?.svg!}
          alt=""
          fallbackSrc="images/placeholder.png"
        />
      </Center>
      <Wrap align="center">
        <Text pl="1" pr="2">
          {props.src.name}
        </Text>
        <FiArrowLeft />
        <Text pl="4" pr="2">
          {props.destination.name}
        </Text>
      </Wrap>
    </Flex>
  );
}

export function Transfers(props: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <BiTransfer />
        <Text fontWeight="extrabold">رفت و آمد</Text>
      </Wrap>
      <Wrap>
        {props.transfers?.map((item: any) => (
          <TravelogueTransferCard key={item.node?.id!} {...item?.node!} />
        ))}
      </Wrap>
    </Stack>
  );
}
