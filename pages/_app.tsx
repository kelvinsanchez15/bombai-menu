import {
  ChakraProvider,
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Icon,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Image } from '../src/components/Image';
import theme from '../src/styles/theme';
import {
  RiWhatsappFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from 'react-icons/ri';
import ExternalLink from '../src/components/ExternalLInk';

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

          <Heading color="white">BombaiMTY</Heading>
          <Text color="white" textAlign="center">
            Venezuelan Food 🇻🇪 - Boneless and Burgers 🔥
          </Text>

          <Box>
            <ExternalLink
              title="Facebook"
              href="https://www.facebook.com/BombaiMTY/"
              icon={
                <Icon
                  color="white"
                  w={6}
                  h={6}
                  m={2}
                  _hover={{ fill: 'red' }}
                  as={RiFacebookBoxFill}
                />
              }
            />
            <ExternalLink
              title="Instagram"
              href="https://www.instagram.com/bombaimty/"
              icon={
                <Icon
                  color="white"
                  w={6}
                  h={6}
                  m={2}
                  _hover={{ fill: 'red' }}
                  as={RiInstagramFill}
                />
              }
            />
            <ExternalLink
              title="Whatsapp"
              href="https://wa.me/528129131222"
              icon={
                <Icon
                  color="white"
                  w={6}
                  h={6}
                  m={2}
                  _hover={{ fill: 'red' }}
                  as={RiWhatsappFill}
                />
              }
            />
          </Box>
        </VStack>
      </Box>

      <Container maxW="container.lg" padding={4}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
