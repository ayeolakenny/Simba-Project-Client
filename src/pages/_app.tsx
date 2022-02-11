import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SERVER_URI_GRAPHQL } from '../constants'

const client: ApolloClient<object> = new ApolloClient({
  uri: SERVER_URI_GRAPHQL,
  cache: new InMemoryCache(),
  credentials: 'include',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
