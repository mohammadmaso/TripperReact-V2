import { ApolloError } from '@apollo/client/core';
import { Wrap, Divider, Flex, Stack, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
import { client } from '../../graphql/ApolloLink';
import {
  namedOperations,
  TripDetailDocument,
  TripDetailQuery,
  useAllArticleQuery,
  useArticleQuery,
  useCreateTripReviewMutation,
  useDeleteTripMutation,
  useLikeTripMutation,
  usePublisTripMutation,
  useSaveTripMutationMutation,
  useTripDetailLikesQuery,
  useTripDetailQuery,
  useTripReviewsLazyQuery,
  useTripReviewsQuery,
  useUnPublisTripMutation,
} from '../../graphql/generated/types';
import BaseLayout from '../../layouts/BaseLayout';
import { getDate, getDays } from '../../utils/time';

interface Props {
  id: string;
  // data: any;
  // loading: boolean;
  // error: ApolloError | undefined;
}

const TripView = ({ id }: Props) => {
  const router = useRouter();
  const toast = useToast();

  const { data, loading, error } = useTripDetailQuery({
    variables: { tripId: id },
  });

  const [getReviews, reviewsLazyQuery] = useTripReviewsLazyQuery({
    variables: { tripId: id },
  });

  // const reviewsLazyQuery = useTripReviewsQuery({
  //   variables: { tripId: props.id },
  // });

  const [publishTrip, publishTripStatus] = usePublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت منتشر شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'انتشار سفر با خطا مواجه شد',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [unPublishTrip, unPublishTripStatus] = useUnPublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت از حالت انتشار خارج شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'عملیات لغو انتشار سفر با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [addReview, addReviewStatus] = useCreateTripReviewMutation({
    refetchQueries: [namedOperations.Query.TripReviews],
  });
  // must have refetch query to get like status
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    variables: { createTripLikeTripId: id },
    refetchQueries: [namedOperations.Query.TripDetailLikes],
  });

  const [saveTrip, saveTripStatus] = useSaveTripMutationMutation({
    variables: { saveTripTrip: id },
    awaitRefetchQueries: true,
    refetchQueries: [namedOperations.Query.MeSavedTrips],
  });

  const [deleteTrip, deleteTripStatus] = useDeleteTripMutation({
    variables: { deleteTripTripId: id },
    refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت حذف شد',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/me');
    },
    onError: () => {
      toast({
        title: 'حذف سفر با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
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
        id={data?.trip?.id as string}
        title={data?.trip?.title}
        categories={data?.trip?.categories.edges}
        author={data?.trip?.author}
        days={getDays(data?.trip?.startDate, data?.trip?.endDate)}
        date={getDate(data?.trip?.startDate)}
        country={data?.trip?.country.name as string}
        province={data?.trip?.province.name as string}
        likes={data?.trip?.likes as number}
        isLiked={data?.trip?.userLiked as boolean}
        isSaved={data?.trip?.userSaved as boolean}
        published={data?.trip?.published as boolean}
        actions={{
          likeTrip: () => likeTrip(),
          saveTrip: () => saveTrip(),
          deleteTrip: () => deleteTrip(),
          publishTrip: () => publishTrip(),
          unPublishTrip: () => unPublishTrip(),
        }}
        queries={{
          likeTripStatus,
          saveTripStatus,
          deleteTripStatus,
          unPublishTripStatus,
          publishTripStatus,
        }}
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
