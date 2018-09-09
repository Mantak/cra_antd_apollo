import AUTH_QUERY from '../graphql/states/auth_query.gql';

const mutations = {
  updateAuth: (_, newState, { cache }) => {
    const query = AUTH_QUERY;
    const previous = cache.readQuery({ query });
    const data = {
      auth: {
        ...previous.auth,
        ...newState,
      },
    };

    cache.writeQuery({ query, data });
    return null;
  },
};

export default mutations;
