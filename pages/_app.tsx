import "@fontsource/roboto-mono/variable.css";
import "styles/global.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    heading: `"Roboto Mono", monospace`,
    body: `"Roboto Mono", monospace`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
