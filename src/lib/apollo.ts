import { ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4odgi1e1v7801xrdwb7cucz/master',
  cache: new InMemoryCache
})