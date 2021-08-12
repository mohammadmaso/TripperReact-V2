import { Grid, Wrap } from '@chakra-ui/react';
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
    <Wrap>
      <AiOutlineTwitter />
      <AiOutlineWhatsApp />
      <FaTelegram />
      <AiOutlineInstagram />
    </Wrap>
  );
};
