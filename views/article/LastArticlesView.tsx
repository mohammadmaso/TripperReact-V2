import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import { useAllArticleQuery } from '../../graphql/generated/types';

interface Props {}

const LastArticlesView = (props: Props) => {
  const { data, loading, error } = useAllArticleQuery({
    variables: { allArticleLast: 10 },
  });
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <div>
      <WikiCarusal data={data} />
    </div>
  );
};

export default LastArticlesView;
