import { SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import TravelerCard from '../cards/TravelerCard';
import TripSmallCard from '../cards/TripSmallCard';
import EmptyResult from '../EmptyResult';

interface Props {
  data: any;
}

const TripList = (props: Props) => {
  if (props.data.length == 0) return <EmptyResult title="سفرنامه" />;
  return (
    <SimpleGrid
      spacing="2"
      columns={{ base: 1, sm: 1, md: 4 }}
      justify="center"
    >
      {props.data?.map((item: any) => (
        <TripSmallCard key={item!.node!.id!} {...item?.node!} />
      ))}
    </SimpleGrid>
  );
};

export default TripList;
