import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  namedOperations,
  useAllArticleQuery,
  useMeDetailQuery,
  useMeFollowersLazyQuery,
  useMeFollowingsLazyQuery,
  useMeSavedTripsLazyQuery,
  useUpdateProfileMutation,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import ProfileContainer from '../../componenets/profile/ProfileContainer';
import { object } from 'yup/lib/locale';

interface Props {}

const MeDetailView = (props: Props) => {
  const { data, loading, error } = useMeDetailQuery();
  const [getFollowings, followingsQuery] = useMeFollowingsLazyQuery();
  const [getFollowers, followersQuery] = useMeFollowersLazyQuery();
  const [getSavedTrips, savedTripsQuery] = useMeSavedTripsLazyQuery();
  const [changeHeader, changeHeaderQuery] = useUpdateProfileMutation();
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
          getSavedTrips: () => getSavedTrips(),
          changeHeader: (variables: any) =>
            changeHeader({
              variables: variables,
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
        }}
        lazyQueries={{
          followingsQuery,
          followersQuery,
          savedTripsQuery,
          changeHeaderQuery,
        }}
      />
    </div>
  );
};

export default MeDetailView;
