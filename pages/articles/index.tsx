import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';

import BaseLayout from '../../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <WikiCategoryList />
      <WikiCarusal />
    </BaseLayout>
  );
}
