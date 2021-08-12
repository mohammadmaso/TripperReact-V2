import { SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import TravelerCard from '../cards/TravelerCard';

interface Props {}

const TravelerList = (props: Props) => {
  return (
    <div>
      <SimpleGrid
        spacing="5"
        columns={{ base: 2, sm: 2, md: 4 }}
        justify="center"
      >
        <TravelerCard />
        <TravelerCard />
        <TravelerCard />
        <TravelerCard />
        <TravelerCard />
      </SimpleGrid>
    </div>
  );
};

export default TravelerList;
