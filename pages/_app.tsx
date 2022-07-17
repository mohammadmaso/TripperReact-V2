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

import { PWAInstallPrompt } from '../components/PWAInstallPrompt';
import StickyBanner from '../components/sticky-banner';
import { client } from '../graphql/ApolloLink';
// import setRTLTextPlugin from 'react-map-gl';

import { setRTLTextPlugin } from 'mapbox-gl';

// TODO: Move this to external map provider component
// setRTLTextPlugin(
//   // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
//   '/mapbox-gl-rtl-text.js',
//   (err) => console.log(err),
//   // lazy: only load when the map first encounters Hebrew or Arabic text
//   true
// );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Fonts />
        <PWAInstallPrompt />
        <StickyBanner />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}
export default MyApp;
