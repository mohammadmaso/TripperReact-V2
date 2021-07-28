import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Flex direction="column" height="90vh" align="center" justify="center">
      <Head>
        <title>یافت نشد!</title>
      </Head>
      <Image
        src={'/images/4956803.svg'}
        height={600}
        width={700}
        layout="intrinsic"
        alt={'تریپر'}
      />
      <Heading fontWeight="light">صفحه مورد نظر شما یافت نشد!</Heading>
    </Flex>
  );
};

export default Page404;
