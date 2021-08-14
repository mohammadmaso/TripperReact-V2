import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import { useAllArticleQuery } from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';

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
    <div>
      <WikiCarusal data={data} />
    </div>
  );
};

export default LastArticlesView;
