import { Grid } from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai';

interface Props {}

export const SocialButtons = (props: Props) => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={1}
      textColor="primary"
      fontSize="xl"
    >
      <AiOutlineTwitter />
      <AiOutlineWhatsApp />
      <AiOutlineYoutube />
      <AiOutlineInstagram />
    </Grid>
  );
};
