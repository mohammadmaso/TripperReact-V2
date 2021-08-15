import { Box, Wrap } from '@chakra-ui/react';
import React from 'react';
import TripCategoryList from '../../componenets/lists/TripCategoryList';
import DevelopingPortal from '../../componenets/Modals/DevelopingModal';

import MinimalLayout from '../../layouts/MinimalLayout';

export default function SlectCategory() {
  return (
    <MinimalLayout selected="selectCategory">
      <DevelopingPortal />
      <Wrap mt={20}>
        <TripCategoryList />
      </Wrap>
    </MinimalLayout>
  );
}
