import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { SERVER_URI_GRAPHQL } from '../constants'

const link = createHttpLink({
  uri: SERVER_URI_GRAPHQL,
  credentials: 'include',
})

const client: ApolloClient<object> = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
