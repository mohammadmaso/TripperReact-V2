import { Wrap, Divider, Button } from '@chakra-ui/react';
import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import TripListCard from '../../componenets/cards/TripListCard';
import { TravelogueListHeader } from '../../componenets/travelogue/TravelogueListHeader';
import {
  TripType,
  useAllTripListQuery,
  useAllTripQuery,
} from '../../graphql/generated/types';

interface Props {}

const TravelogueListView = (props: Props) => {
  const { data, loading, error } = useAllTripListQuery({
    variables: { allTripLast: 10 },
  });

  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <div>
      <TravelogueListHeader />
      <Wrap spacing="3" mb="4" justify="center">
        <Divider />
        {data?.allTrip?.edges.map((item) => (
          <TripListCard key={item?.node?.id} data={item?.node as TripType} />
        ))}
        <Button
          colorScheme="primary"
          rounded="full"
          rightIcon={<FiArrowDown />}
        >
          نتایج بیشتر
        </Button>
      </Wrap>
    </div>
  );
};

export default TravelogueListView;
