import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../components/carousals/WikiCarousal';
import ApiLoading from '../../components/ApiLoading';
import {
  namedOperations,
  useAllArticleQuery,
  useFollowOrUnfollowMutation,
  useIsFollowedQuery,
  useMeDetailQuery,
  useMeFollowersLazyQuery,
  useMeFollowingsLazyQuery,
  useMeSavedTripsLazyQuery,
  UserDetailQuery,
  useTourLeaderDetailLazyQuery,
  useUpdateProfileMutation,
  useUserDetailQuery,
  useUserFollowersLazyQuery,
  useUserFollowingsLazyQuery,
} from '../../graphql/generated/types';
import ApiError from '../../components/ApiError';
import ProfileContainer from '../../components/profile/ProfileContainer';
import { object } from 'yup/lib/locale';
import { DefaultSeo } from 'next-seo';
import siteConfig from '../../site.config';
import { useRouter } from 'next/router';

interface Props {
  data: UserDetailQuery;
}

const ProfileDetailView = ({ data }: Props) => {
  // const { data, loading, error } = useUserDetailQuery({
  //   variables: { username: props.username, followedUsername: props.username },
  // });
  const router = useRouter();

  const [getTourLeaderDetail, tourLeaderDetailQuery] =
    useTourLeaderDetailLazyQuery({
      fetchPolicy: 'no-cache',
    });

  const { data: isFollowed } = useIsFollowedQuery({
    variables: { followedUsername: data.user?.username! },
  });
  const [getFollowings, followingsQuery] = useUserFollowingsLazyQuery({
    variables: { username: data.user?.username! },
    fetchPolicy: 'no-cache',
  });
  const [getFollowers, followersQuery] = useUserFollowersLazyQuery({
    variables: { username: data.user?.username! },
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

  // if (loading) {
  //   return <ApiLoading enhanced={true} />;
  // }
  // if (error) {
  //   return <ApiError />;
  // }
  return (
    <div>
      <DefaultSeo
        title={data?.user?.username}
        titleTemplate="تریپر | %s"
        defaultTitle="تریپر"
        // titleTemplate={`%s · ${siteConfig.title}`}
        description={data?.user?.profilemodel?.about!}
        canonical={siteConfig.url + (router.asPath || '')}
        openGraph={{
          title: data?.user?.username,
          description: data?.user?.profilemodel?.about!,
          type: 'profile',
          site_name: siteConfig.title!,
          profile: {
            username: data?.user?.username,
          },
          images: [
            {
              url: data.user?.avatar!,
              width: 512,
              height: 512,
              alt: data.user?.avatar!,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <ProfileContainer
        data={data}
        isFollowed={isFollowed as boolean}
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
