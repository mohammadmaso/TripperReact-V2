import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { NavItem } from './NavItem';

export const MobileSubNav = ({ label, children, href, icon }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={ChakraLink}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        {icon}
        <Link href={href ?? '#'}>
          <Text
            pr={3}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
        </Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <ChakraLink key={child.label} py={2} href={child.href}>
                <Flex>
                  {child.icon}
                  {child.label}
                </Flex>
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
