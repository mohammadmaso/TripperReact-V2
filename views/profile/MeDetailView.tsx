import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  namedOperations,
  UpdateProfileInput,
  UpdateUserInput,
  useAllArticleQuery,
  useLikeTripMutation,
  useMeDetailQuery,
  useMeFollowersLazyQuery,
  useMeFollowingsLazyQuery,
  useMeSavedTripsLazyQuery,
  useMeSavedTripsQuery,
  usePasswordChangeMutation,
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
  const [changeProfile, changeProfileQuery] = useUpdateProfileMutation();
  const [changeUser, changeUserQuery] = useUpdateUserMutation();
  const [changePassword, changePasswordQuery] = usePasswordChangeMutation();

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
          changeProfile: (updateProfileInput: UpdateProfileInput) =>
            changeProfile({
              variables: { updateProfileInput },
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          changeUser: (updateUserInput: UpdateUserInput) =>
            changeUser({
              variables: { updateUserInput },
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          changePassword: (
            oldPassword: string,
            pnewPassword1: string,
            newPassword2: string
          ) =>
            changePassword({
              variables: {
                passwordChangeOldPassword: oldPassword,
                passwordChangeNewPassword1: pnewPassword1,
                passwordChangeNewPassword2: newPassword2,
              },
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
          changeProfileQuery,
          likeTripStatus,
          changeUserQuery,
          changePasswordQuery,
        }}
      />
    </div>
  );
};

export default MeDetailView;
