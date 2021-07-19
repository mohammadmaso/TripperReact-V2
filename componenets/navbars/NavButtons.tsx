import React from 'react';

import { Button, Stack } from '@chakra-ui/react';

import Link from 'next/link';

const NavButtons = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={3}
    >
      <Button as={'a'} fontSize={'sm'} fontWeight={500} variant={'link'}>
        <Link href="auth/signin">ورود</Link>
      </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'primary'}
        rounded="3xl"
        size="sm"
      >
        <Link href="auth/signup">ثبت‌‌نام</Link>
      </Button>
    </Stack>
  );
};

export default NavButtons;
