import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  namedOperations,
  UpdateUserInput,
  useAllArticleQuery,
  useLikeTripMutation,
  useMeDetailQuery,
  useMeFollowersLazyQuery,
  useMeFollowingsLazyQuery,
  useMeSavedTripsLazyQuery,
  useMeSavedTripsQuery,
  useUpdateProfileMutation,
  useUpdateUserMutation,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import ProfileContainer from '../../componenets/profile/ProfileContainer';
import { object } from 'yup/lib/locale';

interface Props {}

const MeDetailView = (props: Props) => {
  const { data, loading, error } = useMeDetailQuery();
  const [getFollowings, followingsQuery] = useMeFollowingsLazyQuery();
  const [getFollowers, followersQuery] = useMeFollowersLazyQuery();
  const savedTripsQuery = useMeSavedTripsQuery();
  const [changeHeader, changeHeaderQuery] = useUpdateProfileMutation();
  const [changeUser, changeUserQuery] = useUpdateUserMutation();

  const [likeTrip, likeTripStatus] = useLikeTripMutation();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <div>
      <ProfileContainer
        data={data}
        isSelf={true}
        actions={{
          getFollowings: () => getFollowings(),
          getFollowers: () => getFollowers(),
          // getSavedTrips: () => getSavedTrips(),
          changeHeader: (variables: any) =>
            changeHeader({
              variables: variables,
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          changeUser: (updateUserInput: UpdateUserInput) =>
            changeUser({
              variables: { updateUserInput },
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          likeTrip: (id: string) =>
            likeTrip({
              variables: { createTripLikeTripId: id },
              refetchQueries: [namedOperations.Query.TripDetailLikes],
            }),
        }}
        lazyQueries={{
          followingsQuery,
          followersQuery,
          savedTripsQuery,
          changeHeaderQuery,
          likeTripStatus,
          changeUserQuery,
        }}
      />
    </div>
  );
};

export default MeDetailView;
