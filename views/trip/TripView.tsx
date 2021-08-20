import { Wrap, Divider, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import ArticleAccessories from '../../componenets/article/ArticleAccessories';
import ArticleActivities from '../../componenets/article/ArticleActivities';
import { ArticleContent } from '../../componenets/article/ArticleContent';
import { ArticleDescription } from '../../componenets/article/ArticleDescription';
import { ArticleHeader } from '../../componenets/article/ArticleHeader';
import { ArticlePlaces } from '../../componenets/article/ArticlePlaces';
import TravelogueContainer from '../../componenets/travelogue/TravelogueContainer';
import { TravelogueHeader } from '../../componenets/travelogue/TravelogueHeader';
import {
  TripDetailQuery,
  useAllArticleQuery,
  useArticleQuery,
  useLikeTripMutation,
  useTripDetailQuery,
  useTripReviewsLazyQuery,
} from '../../graphql/generated/types';
import BaseLayout from '../../layouts/BaseLayout';
import { getDate, getDays } from '../../utils/time';

interface Props {
  id: string;
}

const TripView = (props: Props) => {
  const { data, loading, error } = useTripDetailQuery({
    variables: { tripId: props.id },
  });

  const [getReviews, reviewsLazyQuery] = useTripReviewsLazyQuery({
    variables: { tripId: props.id },
  });

  // must have refetch query to get like status
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    variables: { createTripLikeTripId: props.id },
  });
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <TravelogueHeader
        title={data?.trip?.title}
        categories={data?.trip?.categories.edges}
        author={data?.trip?.author}
        days={getDays(data?.trip?.startDate, data?.trip?.endDate)}
        date={getDate(data?.trip?.startDate)}
        country={data?.trip?.country.name as string}
        provinance={'تست'}
        likes={data?.trip?.likes as number}
        actions={{
          likeTrip: () => likeTrip(),
        }}
        queries={{ likeTripStatus }}
      />
      <TravelogueContainer
        actions={{
          getReviews: () => getReviews(),
        }}
        data={data as TripDetailQuery}
        queries={{ reviewsLazyQuery }}
      />
    </>
  );
};

export default TripView;
