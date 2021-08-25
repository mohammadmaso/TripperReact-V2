import {
  Avatar,
  Box,
  Divider,
  Text,
  Wrap,
  Stack,
  useColorModeValue,
  Flex,
  Icon,
  Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillDislike } from 'react-icons/ai';
import { BiDislike, BiLike } from 'react-icons/bi';
import {
  useDislikeTripReviewMutationMutation,
  useLikeTripReviewMutationMutation,
  UserType,
} from '../../graphql/generated/types';

interface Props {
  id: string;
  author: Pick<UserType, 'id' | 'username' | 'avatar'> | undefined;
  createdAt: string | undefined;
  description: string;
  dislikesCount: number;
  likesCount: number;
  userLiked: string;
}

const TravelogueReview = (props: Props) => {
  const [likeReview, likeReviewStatus] = useLikeTripReviewMutationMutation({
    variables: { likeTripReviewReview: props.id },
    onCompleted: (data) => {
      setIsLiked(data?.likeTripReview?.tripReviewLike?.value == 'A_1');
      setIsDisLiked(!(data?.likeTripReview?.tripReviewLike?.value == 'A_1'));

      setLikeCount(
        data?.likeTripReview?.tripReviewLike?.review.likesCount as number
      );
      setDisLikeCount(
        data?.likeTripReview?.tripReviewLike?.review.dislikesCount as number
      );
    },
  });
  const [disLikeReview, disLikeReviewStatus] =
    useDislikeTripReviewMutationMutation({
      variables: { dislikeTripReviewReview: props.id },
      onCompleted: (data) => {
        setIsDisLiked(data?.dislikeTripReview?.tripReviewLike?.value == '_1');
        setIsLiked(!(data?.dislikeTripReview?.tripReviewLike?.value == '_1'));
        setLikeCount(
          data?.dislikeTripReview?.tripReviewLike?.review.likesCount as number
        );
        setDisLikeCount(
          data?.dislikeTripReview?.tripReviewLike?.review
            .dislikesCount as number
        );
      },
    });

  const [likeCount, setLikeCount] = useState(props.likesCount);
  const [disLikeCount, setDisLikeCount] = useState(props.dislikesCount);
  const [isLiked, setIsLiked] = useState(props.userLiked == '1');
  const [isDisLiked, setIsDisLiked] = useState(props.userLiked == '-1');

  return (
    <div>
      <Box
        fontWeight="light"
        rounded="md"
        bgColor={useColorModeValue('gray.100', 'gray.900')}
        p="3"
      >
        <Stack>
          <Flex justify="space-between">
            <Box>
              <Link href={`/profile/${props.author?.id}`} passHref>
                <Wrap align="center" cursor="pointer">
                  <Avatar src={props.author?.avatar} />
                  <Text>{props.author?.username}</Text>
                </Wrap>
              </Link>
            </Box>
            <Wrap>
              <Stack alignItems="center">
                {disLikeReviewStatus.loading ? (
                  <Spinner />
                ) : (
                  <Box onClick={() => disLikeReview()} cursor="pointer">
                    {isDisLiked ? (
                      <Icon as={BiDislike} color="red" />
                    ) : (
                      <Icon as={BiDislike} />
                    )}
                  </Box>
                )}

                <Text>{disLikeCount}</Text>
              </Stack>
              <Stack alignItems="center">
                {likeReviewStatus.loading ? (
                  <Spinner />
                ) : (
                  <Box onClick={() => likeReview()} cursor="pointer">
                    {isLiked ? (
                      <Icon as={BiLike} color="green" />
                    ) : (
                      <Icon as={BiLike} />
                    )}
                  </Box>
                )}
                <Text>{likeCount}</Text>
              </Stack>
            </Wrap>
          </Flex>
          <Divider />
          <Text>{props.description}</Text>
        </Stack>
      </Box>
    </div>
  );
};

export default TravelogueReview;
