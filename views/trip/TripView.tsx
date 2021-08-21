import { Wrap, Divider, Flex, Stack } from '@chakra-ui/react';
import Head from 'next/head';
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
  namedOperations,
  TripDetailQuery,
  useAllArticleQuery,
  useArticleQuery,
  useCreateTripReviewMutation,
  useLikeTripMutation,
  useTripDetailLikesQuery,
  useTripDetailQuery,
  useTripReviewsLazyQuery,
  useTripReviewsQuery,
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

  // const reviewsLazyQuery = useTripReviewsQuery({
  //   variables: { tripId: props.id },
  // });

  const [addReview, addReviewStatus] = useCreateTripReviewMutation();
  // must have refetch query to get like status
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    variables: { createTripLikeTripId: props.id },
    refetchQueries: [namedOperations.Query.TripDetailLikes],
  });
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <Head>
        <title>{`تریپر | ${data?.trip?.title} `}</title>
      </Head>
      <TravelogueHeader
        title={data?.trip?.title}
        categories={data?.trip?.categories.edges}
        author={data?.trip?.author}
        days={getDays(data?.trip?.startDate, data?.trip?.endDate)}
        date={getDate(data?.trip?.startDate)}
        country={data?.trip?.country.name as string}
        province={data?.trip?.province.name as string}
        likes={data?.trip?.likes as number}
        isLiked={data?.trip?.userLiked as boolean}
        actions={{
          likeTrip: () => likeTrip(),
        }}
        queries={{ likeTripStatus }}
      />
      <TravelogueContainer
        actions={{
          getReviews: () => getReviews(),
          addReview: (id: string, review: string) =>
            addReview({
              variables: {
                createTripReviewInput: {
                  tripId: id,
                  description: review,
                },
              },
            }),
        }}
        data={data as TripDetailQuery}
        queries={{
          reviewsLazyQuery,
          addReviewStatus,
        }}
      />
    </>
  );
};

export default TripView;
