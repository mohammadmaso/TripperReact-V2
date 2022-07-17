import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import CategoryCarousal from '../../components/carousals/CategoryCarousal';
import TripCategoryList from '../../components/lists/TripCategoryList';
import { WikiCategoryList } from '../../components/lists/WikiCategoryList';
import SectionHeader from '../../components/SectionHeader';
import {
  useAllArticleCategoryiesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';

interface Props {
  listView?: boolean;
}

const TripCategoriesView = (props: Props) => {
  const { data, loading, error } = useAllTripCategoriesQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  if (props.listView) {
    return <TripCategoryList categories={data?.allTripCategories?.edges} />;
  }
  return (
    <Stack>
      <SectionHeader
        title="موضوع سفرنامه‌ها "
        subTitle="مسافران چه سفرهایی رفتنه‌اند"
      />
      <CategoryCarousal categories={data?.allTripCategories?.edges} />
    </Stack>
  );
};
export default TripCategoriesView;
