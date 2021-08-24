import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/globals.css';
import '../styles/map.css';

import theme from '../theme/theme';
import Fonts from '../theme/Font';

import { ApolloProvider } from '@apollo/client';

import { PWAInstallPrompt } from '../componenets/PWAInstallPrompt';

import { client } from '../graphql/ApolloLink';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <PWAInstallPrompt />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
