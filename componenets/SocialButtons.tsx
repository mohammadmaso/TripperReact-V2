import { Grid, Wrap } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

interface Props {}

export const SocialButtons = (props: Props) => {
  return (
    <Wrap cursor="pointer">
      <Link href="http://twitter.com/mytripper_ir" passHref>
        <AiOutlineTwitter />
      </Link>
      {/* <AiOutlineWhatsApp /> */}
      <Link href="https://t.me/mytripper" passHref>
        <FaTelegram />
      </Link>
      <Link href="http://instagram.com/mytripper.ir" passHref>
        <AiOutlineInstagram />
      </Link>
    </Wrap>
  );
};
