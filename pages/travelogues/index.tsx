import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';

import BaseLayout from '../../layouts/BaseLayout';
import ArticleCategoriesView from '../../views/article/ArticleCategoriesView';
import LastArticlesView from '../../views/article/LastArticlesView';
import ActivitiesView from '../../views/trip/ActivitiesView';
import LastTripsView from '../../views/trip/LastTripsView';
import TripCategoriesView from '../../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout title="سفرنامه‌ها">
      {/* <ActivitiesView /> */}
      <TripCategoriesView />
      <LastTripsView />
    </BaseLayout>
  );
}
