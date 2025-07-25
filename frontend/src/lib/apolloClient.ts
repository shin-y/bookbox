import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/query', // Go側のGraphQLエンドポイント
  cache: new InMemoryCache(),
});

export default client;