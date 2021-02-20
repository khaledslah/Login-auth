import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
//import { createClient, Provider } from 'urql'
import {  createStore} from 'redux'
//import  rootReducer  from '../reducers/reducers_index'
import {Provider} from 'react-redux'
import  loggedReducer  from '../reducers/logged'
import  { composeWithDevTools } from 'remote-redux-devtools'
import { AppProps } from 'next/dist/next-server/lib/router/router'

// const client = createClient({
//   url: 'http://localhost:4000/graphql'
// })


const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Your Instance Name',
  hostname: 'localhost',
  port: 8000 // the port your remotedev server is running at
})

const store = createStore(loggedReducer, composeEnhancers());
if (!!store) {
  console.log("done")
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
export type AppDispatch = typeof store.dispatch