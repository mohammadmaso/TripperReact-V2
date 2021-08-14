import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';
import { useAllArticleCategoryiesQuery } from '../../graphql/generated/types';

const ArticleCategoriesView = () => {
  const { data, loading, error } = useAllArticleCategoryiesQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <>
      <WikiCategoryList categories={data?.allArticleCategories?.edges} />
    </>
  );
};
export default ArticleCategoriesView;
