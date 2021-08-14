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

import { ArticleHeader } from '../../componenets/article/ArticleHeader';
import ArticleActivities from '../../componenets/article/ArticleActivities';
import ArticleAccessories from '../../componenets/article/ArticleAccessories';
import { ArticleDescription } from '../../componenets/article/ArticleDescription';
import { ArticleContent } from '../../componenets/article/ArticleContent';
import { ArticlePlaces } from '../../componenets/article/ArticlePlaces';
import ArticleView from '../../views/article/ArticleView';
import { useRouter } from 'next/router';

export default function Travelogue() {
  const router = useRouter();
  return <ArticleView id={router.query.id! as string} />;
}
