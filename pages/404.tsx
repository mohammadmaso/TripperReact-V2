import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import { FiHome } from 'react-icons/fi';
import Link from 'next/link';

interface Props {}

const Page404 = (props: Props) => {
  return (
    <Link href="/" passHref>
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
    </Link>
  );
};

export default Page404;
