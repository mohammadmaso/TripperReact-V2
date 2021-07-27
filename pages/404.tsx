import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Flex direction="column" height="90vh" align="center" justify="center">
      <Image
        src={'/images/404.svg'}
        height={400}
        width={500}
        layout="intrinsic"
        alt={'تریپر'}
      />
      <Heading>صفحه مورد نظر شما یافت نشد!</Heading>
    </Flex>
  );
};

export default Page404;
