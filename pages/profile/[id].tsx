import { ApolloError } from '@apollo/client/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { client } from '../../graphql/ApolloLink';
import { UserDetailDocument } from '../../graphql/generated/types';

import BaseLayout from '../../layouts/BaseLayout';
import ProfileDetailView from '../../views/profile/ProfileDetailView';

interface Props {
  data: any;
  loading: boolean;
  error: ApolloError | undefined;
}
export async function getServerSideProps(context: any) {
  // Fetch data from external API

  const { data, loading, error } = await client.query({
    query: UserDetailDocument,
    variables: { variables: { userId: context.query.id } },
  });
  // Pass data to the page via props
  return { props: { data, loading, error } };
}

export default function Home(props: any) {
  const router = useRouter();
  return (
    <BaseLayout>
      <Head>
        <meta property="og:image" content={props.data?.user.avatar} />
        <meta property="og:title" content="پلتفرم گردشگری تریپر" />
        <meta property="og:type" content="profile:username" />{' '}
        <meta
          property="og:description"
          content={props.data?.user.profilemodel.about}
        />
        <meta property="og:locale" content="fa_IR" />
      </Head>
      <ProfileDetailView id={router.query.id! as string} />
    </BaseLayout>
  );
}
