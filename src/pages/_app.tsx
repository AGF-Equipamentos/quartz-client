import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
