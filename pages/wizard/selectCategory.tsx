import { Box, Wrap } from '@chakra-ui/react';
import React from 'react';
import CategoryList from '../../componenets/lists/CategoryList';

import MinimalLayout from '../../layouts/MinimalLayout';

export default function SlectCategory() {
  return (
    <MinimalLayout selected="selectCategory">
      <Wrap mt={20}>
        <CategoryList />
      </Wrap>
    </MinimalLayout>
  );
}
