import { Flex, Link, Text } from '@chakra-ui/react';
import siteConfig from '../site.config';

import React from 'react';

type Props = {};

const StickyBanner = (props: Props) => {
  return (
    <Flex
      as={Link}
      href={siteConfig.url.youtube}
      bg={'primary.200'}
      color="gray.900"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={999}
      justifyContent="center"
      py="8px"
      _hover={{ textDecoration: 'none', bg: 'primary' }}
      target="_blank"
      //   onClick={() =>
      //     event({
      //       category: 'Subscription',
      //       action: 'Clicked the YouTube banner',
      //       label: 'Sticky YouTube banner on Top',
      //     })
      //   }
    >
      <Text as="span" fontWeight={500} fontSize="14px">
        <Text as="span">
          شما در حال استفاده از نسخه‌ی آزمایشی تریپر هستید.
          <Text as="span" display={['none', 'inline']}>
            گزارش ایرادات را از طریق ایمیل یا شبکه‌های اجتماعی تریپر با ما در
            میان بگذارید.
          </Text>
        </Text>
      </Text>
    </Flex>
  );
};

export default StickyBanner;
