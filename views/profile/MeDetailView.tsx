import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import ApiLoading from '../../componenets/ApiLoading';
import {
  useAllArticleQuery,
  useMeDetailQuery,
  useMeFollowingsLazyQuery,
} from '../../graphql/generated/types';
import ApiError from '../../componenets/ApiError';
import ProfileContainer from '../../componenets/profile/ProfileContainer';

interface Props {}

const MeDetailView = (props: Props) => {
  const { data, loading, error } = useMeDetailQuery();
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <div>
      <ProfileContainer data={data} isSelf={true} />
    </div>
  );
};

export default MeDetailView;
