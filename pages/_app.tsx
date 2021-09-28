import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

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
import { setRTLTextPlugin } from 'react-map-gl';

setRTLTextPlugin(
  // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  undefined,
  // lazy: only load when the map first encounters Hebrew or Arabic text
  true
);

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
