import { Box, HStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

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

const HeadMenu = () => {
  return (
    <Box bg="white" h={'100px'} style={{ boxShadow: '0 0 15px rgba(0,0,0,0.2)' }} zIndex={10}>
      <HStack>
        {menuLinks.map((item, index) => (
          <NextLink key={index} href={item.href}>
            <Link style={{ textDecoration: 'none' }}>
              <Box p={10} className="menuLink" display="flex" align="center">
                {item.name}
              </Box>
            </Link>
          </NextLink>
        ))}
      </HStack>
    </Box>
  );
};

export default HeadMenu;
