import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import CategoryCarousal from '../../componenets/carousals/CategoryCarousal';
import ActivitiesList from '../../componenets/lists/ActivitiesList';
import TripCategoryList from '../../componenets/lists/TripCategoryList';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';
import {
  useAllActivitiesQuery,
  useAllArticleCategoryiesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';

interface Props {
  listView?: boolean;
}

const ActivitiesView = (props: Props) => {
  const { data, loading, error } = useAllActivitiesQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  if (props.listView) {
    return <ActivitiesList activities={data?.allActivities?.edges} />;
  }
  return (
    <>
      <ActivitiesList activities={data?.allActivities?.edges} />
    </>
  );
};
export default ActivitiesView;
