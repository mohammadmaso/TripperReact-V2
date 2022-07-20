import { Wrap, Divider, Flex, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import ArticleAccessories from '../../components/article/ArticleAccessories';
import ArticleActivities from '../../components/article/ArticleActivities';
import { ArticleContent } from '../../components/article/ArticleContent';
import { ArticleDescription } from '../../components/article/ArticleDescription';
import { ArticleHeader } from '../../components/article/ArticleHeader';
import { ArticlePlaces } from '../../components/article/ArticlePlaces';
import {
  useAllArticleQuery,
  useArticleQuery,
} from '../../graphql/generated/types';
import BaseLayout from '../../layouts/BaseLayout';

interface Props {
  id: string;
}

const ArticleView = (props: Props) => {
  const { data, loading, error } = useArticleQuery({
    variables: { articleId: props.id },
  });
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <Head>
        <title>{`تریپر | ${data?.article?.title} `}</title>
      </Head>
      <ArticleHeader
        title={data?.article?.title}
        category={data?.article?.category}
        author={data?.article?.author}
        timeToRead={data?.article?.timeToRead}
      />
      <Wrap>
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="2">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <ArticleDescription
                shortDescription={data?.article?.shortDescription}
              />

              {data?.article?.places.edges.length != 0 ? (
                <>
                  <Divider /> <ArticlePlaces />
                </>
              ) : null}

              <Divider />
              <ArticleContent content={data?.article?.content} />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4">
              {data?.article?.activities.edges.length != 0 ? (
                <>
                  <ArticleActivities data={data?.article?.activities.edges} />
                  <Divider />
                </>
              ) : null}
              {data?.article?.accessories.edges.length != 0 ? (
                <>
                  <ArticleAccessories data={data?.article?.accessories.edges} />
                </>
              ) : null}
            </Stack>
          </Wrap>
        </Flex>
      </Wrap>
    </>
  );
};

export default ArticleView;
