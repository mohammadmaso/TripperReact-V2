import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import MainFooter from '../componenets/footers/MainFooter';
import NavBarView from '../views/NavBarView';
// import NavBarView from '../views/NavBarView';

type Props = {
  children: React.ReactNode;
  subNav?: React.ReactNode;
  title?: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'تریپر | راهکار جامع گردشگری',
};

const BaseLayout = (props: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{`تریپر | ${props.title} `}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarView />
      <Box height="13vh" />
      {props.subNav}
      <Box minHeight="78vh" px={[4, 4, 120]}>
        {props.children}
      </Box>
      <MainFooter />
      {/* <LargeFooter /> */}
    </>
  );
};

BaseLayout.defaultProps = defaultProps;

export default BaseLayout;
