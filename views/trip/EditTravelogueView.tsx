import { useEventListener, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import EditTravelogueContainer from '../../componenets/travelogue/editTravelogue/EditTravelogueContainer';
import { EditTravelogueHeader } from '../../componenets/travelogue/editTravelogue/EditTravelogueHeader';
import {
  namedOperations,
  TripDetailQuery,
  UpdateTripMutationVariables,
  useAllCountriesQuery,
  useAllProvincesOfCountryLazyQuery,
  useAllTripCategoriesQuery,
  useDeleteTripMutation,
  usePublisTripMutation,
  useTripDetailQuery,
  useUnPublisTripMutation,
  useUpdateTripMutation,
} from '../../graphql/generated/types';
import { getDate, getDays } from '../../utils/time';

interface Props {
  id: string;
}

const EditTravelogueView = ({ id }: Props) => {
  const router = useRouter();
  const toast = useToast();

  const { data, loading, error } = useTripDetailQuery({
    variables: { tripId: id },
  });

  const [updateTrip, updateTripStatus] = useUpdateTripMutation({
    refetchQueries: [namedOperations.Query.TripDetail],
    onCompleted: (data) => {
      if (data.updateTrip?.success) {
        toast({
          title: 'سفر شما با موفقیت به‌روز شد.',
          // description: 'برای ثبت نهایی و انتشار سفر، سفر خود را تکمیل کنید',
          status: 'success',
          duration: 8000,
          isClosable: true,
          position: 'top-right',
        });
        // router.push('/travelogues/new/detail');
      }
    },
  });

  const [publishTrip, publishTripStatus] = usePublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت منتشر شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'انتشار سفر با خطا مواجه شد',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [unPublishTrip, unPublishTripStatus] = useUnPublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت از حالت انتشار خارج شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'عملیات لغو انتشار سفر با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [deleteTrip, deleteTripStatus] = useDeleteTripMutation({
    variables: { deleteTripTripId: id },
    refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت حذف شد',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/me');
    },
    onError: () => {
      toast({
        title: 'حذف سفر با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const countriesQuery = useAllCountriesQuery();
  const [getProvincesOfCountry, provincesOfCountryQuery] =
    useAllProvincesOfCountryLazyQuery();

  const categoriesQuery = useAllTripCategoriesQuery();

  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <Head>
        <title>{`ویرایش سفرنامه | ${data?.trip?.title} `}</title>
      </Head>
      <EditTravelogueHeader
        data={data as TripDetailQuery}
        id={data?.trip?.id as string}
        title={data?.trip?.title}
        categories={data?.trip?.categories.edges}
        author={data?.trip?.author}
        days={getDays(data?.trip?.startDate, data?.trip?.endDate)}
        date={getDate(data?.trip?.startDate)}
        country={data?.trip?.country.name as string}
        province={data?.trip?.province.name as string}
        likes={data?.trip?.likes as number}
        isLiked={data?.trip?.userLiked as boolean}
        isSaved={data?.trip?.userSaved as boolean}
        published={data?.trip?.published as boolean}
        actions={{
          deleteTrip: () => deleteTrip(),
          publishTrip: () => publishTrip(),
          unPublishTrip: () => unPublishTrip(),
          updateTrip: (inputs: UpdateTripMutationVariables) =>
            updateTrip({ variables: { ...inputs } }),
          getProvincesOfCountry: (countryId: string) =>
            getProvincesOfCountry({
              variables: { allProvincesCountry: countryId },
            }),
        }}
        queries={{
          deleteTripStatus,
          unPublishTripStatus,
          publishTripStatus,
          countriesQuery,
          provincesOfCountryQuery,
          categoriesQuery,
          updateTripStatus,
        }}
      />
      <EditTravelogueContainer data={data as TripDetailQuery} />
    </>
  );
};

export default EditTravelogueView;
