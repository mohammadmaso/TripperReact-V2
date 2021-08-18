import { fromPromise, createHttpLink, ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import Router  from "next/router";
import { RefreshTokenDocument } from "./generated/types";
import { onError } from 'apollo-link-error';
import introspectionResult from './fragment-matcher';
import { createUploadLink } from 'apollo-upload-client'


const getNewToken = async () => {
  const refreshToken = await  localStorage.getItem('refresh-token')
  return client.mutate({ mutation: RefreshTokenDocument, variables:{refreshTokenRefreshToken : refreshToken} }).then((response) => {
    // extract your accessToken from your response data and return it
    return response.data;
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
                console.error(error);
                localStorage.removeItem('token');
                localStorage.removeItem('refresh-token');
                return;
              })
            )
              .filter((value) => Boolean(value))
              .flatMap(({token, refreshToken}) => {
                localStorage.setItem('token', token );
                localStorage.setItem('refresh-token',refreshToken);
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

const httpLink = createUploadLink({
  ssrMode: typeof window === "undefined",
  uri: 'https://service.mytripper.ir/api/',
});

const authLink = setContext( (_, { headers }) =>  {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
});
const cache = new InMemoryCache({    
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        allArticle: relayStylePagination(),
      },
    },
  },
});


export const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  // to use errorLink functinality
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: cache
});