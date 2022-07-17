import {
  Container,
  Flex,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Divider,
  TagRightIcon,
  TagLabel,
  Box,
  useEventListener,
} from '@chakra-ui/react';
import React from 'react';

import BaseLayout from '../../layouts/BaseLayout';

import { ArticleHeader } from '../../components/article/ArticleHeader';
import ArticleActivities from '../../components/article/ArticleActivities';
import ArticleAccessories from '../../components/article/ArticleAccessories';
import { ArticleDescription } from '../../components/article/ArticleDescription';
import { ArticleContent } from '../../components/article/ArticleContent';
import { ArticlePlaces } from '../../components/article/ArticlePlaces';
import ArticleView from '../../views/article/ArticleView';
import { useRouter } from 'next/router';

export default function Travelogue() {
  const router = useRouter();
  return (
    <BaseLayout>
      <ArticleView id={router.query.id! as string} />
    </BaseLayout>
  );
}
