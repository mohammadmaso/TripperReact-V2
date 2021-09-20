import { Wrap, Divider, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import TripListCard from '../../componenets/cards/TripListCard';
import { TravelogueListHeader } from '../../componenets/travelogue/TravelogueListHeader';
import {
  TripType,
  useAllProvincesOfCountryLazyQuery,
  useAllTripCategoriesQuery,
  useAllTripListQuery,
  useAllTripQuery,
} from '../../graphql/generated/types';

interface Props {}

const TravelogueListView = (props: Props) => {
  const { data, loading, error, refetch } = useAllTripListQuery({
    variables: { allTripLast: 10 },
  });

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
    <Stack spacing="4">
      <TravelogueListHeader
        queries={{ provincesOfCountryQuery, categoriesQuery }}
        actions={{
          getProvincesOfCountry: (countryId: string) =>
            getProvincesOfCountry({
              variables: { allProvincesCountry: countryId },
            }),
        }}
        onCategoryChange={(categoryId) =>
          refetch({ allTripLast: 10, allTripCategories: [[categoryId]] })
        }
        onProvinceChange={(provinceId) => null}
      />
      <Wrap spacing="3" mb="4" justify="center">
        <Divider />
        {data?.allTrip?.edges.map((item) => (
          <TripListCard key={item?.node?.id} data={item?.node as TripType} />
        ))}
        <Button
          colorScheme="primary"
          rounded="full"
          rightIcon={<FiArrowDown />}
        >
          نتایج بیشتر
        </Button>
      </Wrap>
    </Stack>
  );
};

export default TravelogueListView;
