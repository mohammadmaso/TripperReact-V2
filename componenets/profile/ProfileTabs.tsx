import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import TripCarousal from '../carousals/TripCarousal';
import TripList from '../lists/TripList';
import GroupTripList from '../lists/GroupTripList';
import ApiLoading from '../ApiLoading';
import TripSmallCard from '../cards/TripSmallCard';
import { Exact, MeSavedTripsQuery } from '../../graphql/generated/types';
import { LazyQueryResult } from '@apollo/client/react/types/types';

interface Props {
  trips: any;
  actions: any;
  queries?: any;
  isSelf: boolean;
}

const ProfileTabs = (props: Props) => {
  return (
    <Tabs colorScheme="primary" size="sm" align="center">
      <TabList>
        <Tab>سفرنامه‌ها</Tab>
        {props.isSelf && (
          <Tab onClick={() => props.actions?.getSavedTrips()}>
            سفرهای موردعلاقه{' '}
          </Tab>
        )}
        <Tab isDisabled>دست‌آوردها</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TripList data={props.trips} />
        </TabPanel>
        {props.isSelf && (
          <TabPanel>
            {props.queries?.savedTripsQuery?.loading ? (
              <ApiLoading />
            ) : props.queries?.savedTripsQuery?.data?.me?.savedTrips.edges
                .length != 0 ? (
              <SimpleGrid
                spacing="2"
                columns={{ base: 1, sm: 1, md: 4 }}
                justify="center"
              >
                {props.queries?.savedTripsQuery?.data?.me?.savedTrips.edges?.map(
                  (item: any) => (
                    <TripSmallCard
                      key={item!.node!.trip.id!}
                      {...item?.node?.trip}
                    />
                  )
                )}
              </SimpleGrid>
            ) : (
              <Text>موردی یافت نشد!</Text>
            )}
          </TabPanel>
        )}
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
