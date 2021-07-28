import React from 'react';
import TravelerList from '../../../componenets/lists/TravelerList';

import BaseLayout from '../../../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <TravelerList />
      </div>
    </BaseLayout>
  );
}
