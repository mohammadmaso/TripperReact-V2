import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import WikiList from '../../componenets/lists/WikiList';
import { useAllArticleQuery } from '../../graphql/generated/types';

interface Props {
  categoryId: string;
}

const TripFilterView = (props: Props) => {
  const { data, loading, error } = useAllArticleQuery({
    variables: { allArticleCategory: props.categoryId },
  });
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <div>
      <WikiList
        category={data?.allArticle?.edges[0]?.node?.category?.title as string}
        data={data}
      />
    </div>
  );
};

export default TripFilterView;
