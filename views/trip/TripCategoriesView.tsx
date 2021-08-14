import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import CategoryCarousal from '../../componenets/carousals/CategoryCarousal';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';
import {
  useAllArticleCategoryiesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';

const TripCategoriesView = () => {
  const { data, loading, error } = useAllTripCategoriesQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <>
      <CategoryCarousal categories={data?.allTripCategories?.edges} />
    </>
  );
};
export default TripCategoriesView;
