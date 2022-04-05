// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
// import NavbarOne from '../components/Navbar/NavbarOne'
import theme from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      {/* <NavbarOne /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp