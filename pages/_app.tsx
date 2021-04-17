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

          <Heading>Bombai - MTY</Heading>
          <Text textAlign="center">
            Venezuelan Food 🇻🇪 - Boneless and Burgers 🔥
          </Text>
          <Text textAlign="center">
            "𝙇𝙞𝙛𝙚 𝙞𝙨 𝙡𝙞𝙠𝙚 𝙩𝙝𝙚 𝙖𝙧𝙚𝙥𝙖, 𝙞𝙩 𝙩𝙖𝙨𝙩𝙚𝙨 𝙬𝙝𝙖𝙩 𝙮𝙤𝙪 𝙥𝙪𝙩"
          </Text>
          <Text textAlign="center">💥DiDi Food 💥Rappi 📲WhatsApp</Text>
        </VStack>
        <Divider borderColor="blackAlpha.500" marginY={4} />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
