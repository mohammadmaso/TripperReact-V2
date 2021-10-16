import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import CategoryCarousal from '../../componenets/carousals/CategoryCarousal';
import TripCategoryList from '../../componenets/lists/TripCategoryList';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';
import SectionHeader from '../../componenets/SectionHeader';
import {
  useAllArticleCategoryiesQuery,
  useAllTourCategoriesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';

interface Props {
  listView?: boolean;
}

const TourCategoriesView = (props: Props) => {
  const { data, loading, error } = useAllTourCategoriesQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  if (props.listView) {
    return <TripCategoryList categories={data?.tourCategories?.edges} />;
  }
  return (
    <Stack>
      <SectionHeader title="دسته بندی تور‌ها" subTitle="تور برای هر سلیقه" />
      <CategoryCarousal categories={data?.tourCategories?.edges} />
    </Stack>
  );
};
export default TourCategoriesView;
