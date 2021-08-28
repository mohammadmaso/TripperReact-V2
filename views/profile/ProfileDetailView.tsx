import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  namedOperations,
  useAllArticleQuery,
  useFollowOrUnfollowMutation,
  useIsFollowedQuery,
  useMeDetailQuery,
  useMeFollowersLazyQuery,
  useMeFollowingsLazyQuery,
  useMeSavedTripsLazyQuery,
  useUpdateProfileMutation,
  useUserDetailQuery,
  useUserFollowersLazyQuery,
  useUserFollowingsLazyQuery,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import ProfileContainer from '../../componenets/profile/ProfileContainer';
import { object } from 'yup/lib/locale';

interface Props {
  id: string;
}

const ProfileDetailView = (props: Props) => {
  const { data, loading, error } = useUserDetailQuery({
    variables: { userId: props.id, followedUserId: props.id },
  });
  const [getFollowings, followingsQuery] = useUserFollowingsLazyQuery({
    variables: { userId: props.id },
  });
  const [getFollowers, followersQuery] = useUserFollowersLazyQuery({
    variables: { userId: props.id },
  });

  const [followOrUnfollow, followOrUnfollowMutation] =
    useFollowOrUnfollowMutation({
      variables: {
        followOrUnfollowInput: {
          followedId: props.id,
        },
      },
      // refetchQueries: [namedOperations.Query.UserDetail],
    });
  // const isFollowedQuery = useIsFollowedQuery({ variables: { followedUserId: props.id } });

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
        isSelf={false}
        actions={{
          getFollowings: () => getFollowings(),
          getFollowers: () => getFollowers(),
          followOrUnfollow: () => followOrUnfollow(),
        }}
        lazyQueries={{
          followingsQuery,
          followersQuery,
          followOrUnfollowMutation,
        }}
      />
    </div>
  );
};

export default ProfileDetailView;
