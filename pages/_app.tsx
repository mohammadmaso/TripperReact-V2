import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/globals.css';

import theme from '../theme/theme';
import Fonts from '../theme/Font';

import introspectionResult from '../graphql/fragment-matcher';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { onError } from 'apollo-link-error';
import { fromPromise, ApolloLink } from 'apollo-link';
import { relayStylePagination } from '@apollo/client/utilities';

import { setContext } from '@apollo/client/link/context';
import { RefreshTokenDocument } from '../graphql/generated/types';

const getNewToken = () => {
  return client.mutate({ mutation: RefreshTokenDocument }).then((response) => {
    // extract your accessToken from your response data and return it
    const { token, refreshToken } = response.data;
    return token;
  });
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions?.code) {
          case 'UNAUTHENTICATED':
            return fromPromise(
              getNewToken().catch((error) => {
                // Handle token refresh errors e.g clear stored tokens, redirect to login
                return;
              })
            )
              .filter((value) => Boolean(value))
              .flatMap((token) => {
                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `JWT ${token}`,
                  },
                });

                // retry the request, returning the new observable
                return forward(operation);
              });
        }
      }
    }
  }
);

const httpLink = createHttpLink({
  uri: 'https://tripper-backend.herokuapp.com/api/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // to use errorLink functinality
  // link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          comments: relayStylePagination(),
        },
      },
    },
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
