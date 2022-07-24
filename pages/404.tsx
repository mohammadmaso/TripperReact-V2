import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import { FiHome } from 'react-icons/fi';
import Link from 'next/link';
import GoBack from '../components/go-back';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Flex
      direction="column"
      height="90vh"
      align="center"
      justifyContent="center"
    >
      <Head>
        <title>یافت نشد!</title>
      </Head>
      <Image
        src={'/images/4956803.svg'}
        height={600}
        width={700}
        fallbackSrc="images/placeholder.png"
        // layout="intrinsic"
        alt={'تریپر'}
      />
      <Heading fontWeight="light">صفحه مورد نظر شما یافت نشد!</Heading>
      <GoBack />
    </Flex>
  );
};

export default Page404;
