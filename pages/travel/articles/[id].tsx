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

import BaseLayout from '../../../layouts/BaseLayout';

import { ArticleHeader } from '../../../componenets/article/ArticleHeader';
import ArticleActivities from '../../../componenets/article/ArticleActivities';
import ArticleAccessories from '../../../componenets/article/ArticleAccessories';
import { ArticleDescription } from '../../../componenets/article/ArticleDescription';
import { ArticleContent } from '../../../componenets/article/ArticleContent';
import { ArticlePlaces } from '../../../componenets/article/ArticlePlaces';

export default function Travelogue() {
  return (
    <BaseLayout title="مقاله نمونه" subNav={<ArticleHeader />}>
      <Wrap>
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="2">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <ArticleDescription />
              <Divider />
              <ArticlePlaces />
              <Divider />
              <ArticleContent />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <ArticleActivities />
              <Divider />
              <ArticleAccessories />
            </Stack>
          </Wrap>
        </Flex>
      </Wrap>
      <Box h="5vh" />
    </BaseLayout>
  );
}
