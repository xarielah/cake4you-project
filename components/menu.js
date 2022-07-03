import { Box, HStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const menuLinks = [
  {
    href: '/',
    name: 'דף הבית',
  },
  {
    href: '/about',
    name: 'אודות',
  },
  {
    href: '/gallery',
    name: 'גלריה',
    sublinks: [
      {
        href: '/house-cakes',
        name: 'עוגות לבית',
      },
      {
        href: '/party-cakes',
        name: 'עוגות לימי הולדת',
      },
      {
        href: '/cookies',
        name: 'עוגיות',
      },
      {
        href: '/sweets',
        name: 'מתוקים',
      },
    ],
  },
  {
    href: '/customers-recommend',
    name: 'לקוחות מספרים',
  },
  {
    href: '/contact',
    name: 'צור קשר',
  },
];

const hoverProps = {
  transition: '200ms all ease-in-out',
  backgroundColor: 'white',
  color: 'black'
}

const NormalButton = ({ href, name }) => {
  const router = useRouter()
  return (
    <NextLink href={href}>
      <Link style={{ textDecoration: 'none' }}>
        <Box fontWeight={href === router.asPath ? 'bold' : 'normal'} _hover={hoverProps} p={7} display="flex" align="center">
          {name}
        </Box>
      </Link>
    </NextLink>
  )
}

const ListButton = ({ name, sublinks, prefix }) => {
  return (<Menu>
    <MenuButton p={7} _hover={hoverProps} as={Box} cursor='pointer'>
      {name}
      <ChevronDownIcon />
    </MenuButton>
    <MenuList fontSize={'1rem'}>
      {sublinks.map((item, index) =>
        <NextLink key={index} href={prefix + item.href}>
          <MenuItem color="black">
            <Link style={{ textDecoration: 'none' }}>
              {item.name}
            </Link>
          </MenuItem>
        </NextLink>)}
    </MenuList>
  </Menu>)
}

const HeadMenu = () => {
  return (
    <Box bg="pink.200" fontSize="1.2em" color="gray.50" my={7} justify={'space-between'} style={{ boxShadow: '0 0 15px rgba(0,0,0,0.2)' }} zIndex={10}>
      <HStack justify={'space-evenly'}>
        {menuLinks.map((item, index) => (
          item.sublinks ? <ListButton key={index} name={item.name} prefix={item.href} sublinks={item.sublinks} /> : <NormalButton key={index} name={item.name} href={item.href} />
        ))}
      </HStack>
    </Box>
  );
};

export default HeadMenu;
