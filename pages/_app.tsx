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
      <Box as="header" position="relative" padding={4} backgroundColor="black">
        <Box opacity={0.5}>
          <Image
            src="https://user-images.githubusercontent.com/4708484/115153767-97820400-a045-11eb-9fb9-40fec95c010d.jpg"
            alt=""
            objectFit="cover"
          />
        </Box>
        <VStack position="relative" zIndex={1}>
          <Box display="flex" height={36} width={36}>
            <Image
              src="/logo.png"
              alt="Logo"
              dimensions={[400, 400]}
              priority
            />
          </Box>

          <Heading color="white">Bombai - MTY</Heading>
          <Text color="white" textAlign="center">
            Venezuelan Food 🇻🇪 - Boneless and Burgers 🔥
          </Text>
          <Text color="white" textAlign="center">
            "𝙇𝙞𝙛𝙚 𝙞𝙨 𝙡𝙞𝙠𝙚 𝙩𝙝𝙚 𝙖𝙧𝙚𝙥𝙖, 𝙞𝙩 𝙩𝙖𝙨𝙩𝙚𝙨 𝙬𝙝𝙖𝙩 𝙮𝙤𝙪 𝙥𝙪𝙩"
          </Text>
          <Text color="white" textAlign="center">
            💥DiDi Food 💥Rappi 📲WhatsApp
          </Text>
        </VStack>
      </Box>

      <Container padding={4}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
