import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  useAllArticleQuery,
  useAllTripQuery,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import TripCarousal from '../../componenets/carousals/TripCarousal';

interface Props {}

const LastTripsView = (props: Props) => {
  const { data, loading, error } = useAllTripQuery({
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
      <TripCarousal data={data} />
    </div>
  );
};

export default LastTripsView;
