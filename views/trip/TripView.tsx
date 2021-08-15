import { Wrap, Divider, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../componenets/ApiError';
import ApiLoading from '../../componenets/ApiLoading';
import ArticleAccessories from '../../componenets/article/ArticleAccessories';
import ArticleActivities from '../../componenets/article/ArticleActivities';
import { ArticleContent } from '../../componenets/article/ArticleContent';
import { ArticleDescription } from '../../componenets/article/ArticleDescription';
import { ArticleHeader } from '../../componenets/article/ArticleHeader';
import { ArticlePlaces } from '../../componenets/article/ArticlePlaces';
import {
  useAllArticleQuery,
  useArticleQuery,
} from '../../graphql/generated/types';
import BaseLayout from '../../layouts/BaseLayout';

interface Props {
  id: string;
}

const TripView = (props: Props) => {
  const { data, loading, error } = useArticleQuery({
    variables: { articleId: props.id },
  });
  if (loading) {
    return <ApiLoading />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <BaseLayout
      title={data?.article?.title}
      subNav={
        <ArticleHeader
          title={data?.article?.title}
          category={data?.article?.category}
          author={data?.article?.author}
          timeToRead={data?.article?.timeToRead}
        />
      }
    >
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
    </BaseLayout>
  );
};

export default TripView;
