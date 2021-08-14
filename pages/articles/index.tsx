import React from 'react';
import WikiCarusal from '../../componenets/carousals/WikiCarousal';
import { WikiCategoryList } from '../../componenets/lists/WikiCategoryList';

import BaseLayout from '../../layouts/BaseLayout';
import ArticleCategoriesView from '../../views/article/ArticleCategoriesView';
import LastArticlesView from '../../views/article/LastArticlesView';

export default function Home() {
  return (
    <BaseLayout title="مجله سفر">
      <ArticleCategoriesView />
      <LastArticlesView />
    </BaseLayout>
  );
}
