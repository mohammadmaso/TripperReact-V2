import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import CategoryCarousal from '../../componenets/carousals/CategoryCarousal';
import TripCategoryList from '../../componenets/lists/TripCategoryList';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';
import {
  useAllArticleCategoryiesQuery, useAllProfilesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';
import TravelerList from "../../componenets/lists/TravelerList";

interface Props {
  listView?: boolean;
}

const TravelersView = (props: Props) => {
  const { data, loading, error } = useAllProfilesQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <TravelerList profiles={data?.users?.edges} />
    </>
  );
};
export default TravelersView;
