import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
// 使用apollo做state store
import { withClientState } from 'apollo-link-state';

import { dedupLink, authLink, errorsLink, infosLink, httpLink, socketLink } from './apollo/links';
import defaultState from './apollo/state_defaults';
import stateMutations from './apollo/state_mutations';

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: { Mutation: stateMutations },
});

const links = [
  dedupLink,
  authLink,
  errorsLink,
  infosLink,
  stateLink,
  ApolloLink.split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    socketLink,
    httpLink
  ),
];
export default new ApolloClient({
  link: ApolloLink.from(links),
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  cache,
});
