import {
  ChakraProvider,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  Box,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Image } from '../src/components/Image';
import theme from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg" padding={4}>
        <VStack>
          <Box display="flex" height={36} width={36}>
            <Image
              src="/logo.png"
              alt="Logo"
              dimensions={[400, 400]}
              priority
            />
          </Box>

          <Heading>Bombai</Heading>
          <Text textAlign="center">
            ❤️ Comida Italo-Venezolana ❤️ Panadería Artesanal ❤️ Postres ❤️
            Encurtidos ❤️ Variedades y mucho más
          </Text>
        </VStack>
        <Divider marginY={4} />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
