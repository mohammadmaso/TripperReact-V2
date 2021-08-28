import Head from 'next/head';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import { useTripDetailQuery } from '../../graphql/generated/types';

interface Props {
  id: string;
}

const EditTravelogueView = ({ id }: Props) => {
  const { data, loading, error } = useTripDetailQuery({
    variables: { tripId: id },
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
    </>
  );
};

export default EditTravelogueView;
