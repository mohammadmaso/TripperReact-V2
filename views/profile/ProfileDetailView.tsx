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
  useTourLeaderDetailLazyQuery,
  useUpdateProfileMutation,
  useUserDetailQuery,
  useUserFollowersLazyQuery,
  useUserFollowingsLazyQuery,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import ProfileContainer from '../../componenets/profile/ProfileContainer';
import { object } from 'yup/lib/locale';

interface Props {
  username: string;
}

const ProfileDetailView = (props: Props) => {
  const { data, loading, error } = useUserDetailQuery({
    variables: { username: props.username, followedUsername: props.username },
  });

  const [getTourLeaderDetail, tourLeaderDetailQuery] =
    useTourLeaderDetailLazyQuery({
      fetchPolicy: 'no-cache',
    });
  const [getFollowings, followingsQuery] = useUserFollowingsLazyQuery({
    variables: { username: props.username },
    fetchPolicy: 'no-cache',
  });
  const [getFollowers, followersQuery] = useUserFollowersLazyQuery({
    variables: { username: props.username },
    fetchPolicy: 'no-cache',
  });

  const [followOrUnfollow, followOrUnfollowMutation] =
    useFollowOrUnfollowMutation({
      variables: {
        followOrUnfollowInput: {
          followedId: data?.user?.id!,
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
          getTourLeaderDetail: () => getTourLeaderDetail(),
          getFollowings: () => getFollowings(),
          getFollowers: () => getFollowers(),
          followOrUnfollow: () => followOrUnfollow(),
        }}
        lazyQueries={{
          followingsQuery,
          followersQuery,
          followOrUnfollowMutation,
          tourLeaderDetailQuery,
        }}
      />
    </div>
  );
};

export default ProfileDetailView;
