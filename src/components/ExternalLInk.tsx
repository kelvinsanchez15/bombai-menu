import React from 'react';
import { Link, LinkProps, IconProps } from '@chakra-ui/react';

interface Props extends LinkProps {
  icon: IconProps;
}

const ExternalLink = ({ icon, href, ...rest }: Props) => (
  <Link
    fontSize="xl"
    fontWeight={500}
    fontFamily="heading"
    color="brand.black"
    my={5}
    href={href}
    isExternal
    {...rest}
  >
    {icon}
  </Link>
);

export default ExternalLink;
