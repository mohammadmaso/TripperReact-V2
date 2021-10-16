import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import { useAllArticleQuery } from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import SectionHeader from '../../componenets/SectionHeader';

interface Props {}

const LastArticlesView = (props: Props) => {
  const { data, loading, error } = useAllArticleQuery({
    variables: { allArticleLast: 10 },
  });
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <Stack>
      <SectionHeader
        title="آخرین مقاله‌ها"
        subTitle="در وبلاگ تریپر یاد بگیرید"
      />
      <WikiCarusal data={data} />
    </Stack>
  );
};

export default LastArticlesView;
