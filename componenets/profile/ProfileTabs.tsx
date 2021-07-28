import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TripCarousal from '../carousals/TripCarousal';
import TripList from '../lists/TripList';
import GroupTripList from '../lists/GroupTripList';

interface Props {}

const ProfileTabs = (props: Props) => {
  return (
    <Tabs isLazy colorScheme="primary" size="sm" align="center">
      <TabList>
        <Tab>سفرنامه‌ها</Tab>
        <Tab>سفرهای گروهی</Tab>
        <Tab>مدال‌ها</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TripList />
        </TabPanel>
        <TabPanel>
          <GroupTripList />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
