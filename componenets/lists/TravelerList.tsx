import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import TravelerCard from '../cards/TravelerCard';

interface Props {}

const TravelerList = (props: Props) => {
  return (
    <div>
      <Wrap spacing="5" justify="center">
        <WrapItem>
          <TravelerCard />
        </WrapItem>
        <WrapItem>
          <TravelerCard />
        </WrapItem>
        <WrapItem>
          <TravelerCard />
        </WrapItem>
        <WrapItem>
          <TravelerCard />
        </WrapItem>
        <WrapItem>
          <TravelerCard />
        </WrapItem>
        <WrapItem>
          <TravelerCard />
        </WrapItem>
        <WrapItem>
          <TravelerCard />
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default TravelerList;
