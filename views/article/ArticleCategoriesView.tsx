import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';
import { useAllArticleCategoryiesQuery } from '../../graphql/generated/types';

const ArticleCategoriesView = () => {
  const { data, loading, error } = useAllArticleCategoryiesQuery();
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <>
      <WikiCategoryList categories={data?.allArticleCategories?.edges} />
    </>
  );
};
export default ArticleCategoriesView;
