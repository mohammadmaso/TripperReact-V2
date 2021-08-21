import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  AllTripDocument,
  AllTripQuery,
  namedOperations,
  useAllArticleQuery,
  useAllTripQuery,
  useLikeTripMutation,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import TripCarousal from '../../componenets/carousals/TripCarousal';

interface Props {}

const LastTripsView = (props: Props) => {
  const { data, loading, error } = useAllTripQuery({
    variables: { allTripLast: 10 },
  });

  const [likeTrip, likeTripStatus] = useLikeTripMutation();
  //   {
  //   update(cache, { data }) {
  //     const tripId = data?.createTripLike?.trip?.id
  //     const newUserLikrStatusFromResponse = data?.createTripLike?.trip?.userLiked;
  //     const cachedTrips = cache.readQuery<AllTripQuery>({
  //       query : AllTripDocument,
  //     })?.allTrip?.edges;
  //     const cachedTrip = cachedTrips?.filter((item) => item?.node?.id == tripId)

  //     if (cachedTrip) {
  //       cache.writeQuery({
  //         query: AllTripDocument,
  //         data: {
  //           allTrip: {
  //             edges: [
  //               {
  //                 node: {
  //                   ...existingUserLikeStatus?.allTrip?.edges,
  //                   newUserLikrStatusFromResponse,
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       });
  //     }
  //   },
  // }

  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <div>
      <TripCarousal
        data={data}
        actions={{
          likeTrip: (id: string) =>
            likeTrip({
              variables: { createTripLikeTripId: id },
              refetchQueries: [namedOperations.Query.TripDetailLikes],
            }),
        }}
        queries={{ likeTripStatus }}
      />
    </div>
  );
};

export default LastTripsView;
