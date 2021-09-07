import { Stack, Wrap, Text } from '@chakra-ui/react';
import React from 'react';
import { FcGallery } from 'react-icons/fc';
import { FiHome, FiImage } from 'react-icons/fi';
import ImageGallery from 'react-image-gallery';
import { Maybe, TripImageType } from '../../graphql/generated/types';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description: 'این یک ویدیو آزمایشی است ',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
interface Props {
  images: Maybe<
    {
      __typename?: 'TripImageTypeEdge' | undefined;
    } & {
      node?:
        | Maybe<
            {
              __typename?: 'TripImageType' | undefined;
            } & Pick<TripImageType, 'image' | 'description' | 'copyrightName'>
          >
        | undefined;
    }
  >[];
}

export const TravelogueGallery = (props: Props) => {
  const images = props.images?.map((item) => ({
    original: item?.node?.image as string,
    thumbnail: item?.node?.image as string,
    description: `${item?.node?.description} - Ⓒ${item?.node?.copyrightName}`,
  }));

  return (
    <div>
      <Stack>
        <Wrap align="center">
          <FiImage />
          <Text fontWeight="extrabold">گالری</Text>
        </Wrap>
        <ImageGallery isRTL items={images} />
      </Stack>
    </div>
  );
};
