import React from 'react';
import CategoryCarousal from '../componenets/carousals/CategoryCarousal';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <CategoryCarousal />
      </div>
    </BaseLayout>
  );
}
