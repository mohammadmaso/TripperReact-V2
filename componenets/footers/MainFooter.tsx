import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  VStack,
  Spacer,
  Grid,
  Center,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Image from 'next/image';

import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from 'react-icons/ai';

import TextLogo from '../logos/TextLogo';
import { SocialButtons } from '../SocialButtons';

export default function LargeWithNewsletter() {
  return (
    <Box
      boxShadow="inner"
      bgColor={useColorModeValue('#f2f2f2', 'gray.900')}
      fontWeight="light"
    >
      <Container maxW={'full'} py="10" px={[4, 4, 120]}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={8}
          alignItems="end"
        >
          <Box>
            <Stack
              spacing="5"
              alignItems={{
                base: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
              }}
            >
              <TextLogo width="140" height="50" />
              <Text fontSize="sm" textColor="primary">
                تریپر راهکار جامع گردشگری‌ است، در شبکه‌اجتماعی تریپر می‌توانید
                سفرنامه‌های خود را منتشر کنید، سفرنامه دیگران را بخوانید، آنها
                را دنبال کنید و از آخرین سفرها مطلع شوید. همچنین می‌توانید
                سفرهای گروهی که قصد انجام آن را دارید بصورت رایگان بسازید تا
                همسفر‌های سفر بعدی خود را پیدا کنید. همچنین می‌توانید از جزییات
                جدیدترین تور‌های باکیفیت از تورلیدر‌های احراز هویت‌شده مطلع شوید
                و در آنها ثبت‌نام کنید.
              </Text>
            </Stack>
          </Box>
          <Flex columns={{ base: 1, sm: 1, md: 2 }} justify="space-around">
            <Stack fontSize="sm" textColor="primary">
              <Link>سفرنامه‌ها</Link>
              <Link>همسفر</Link>
              <Link>سفرساز</Link>
              <Link>جاذبه‌ها</Link>
              <Link>مقالات</Link>
            </Stack>
            <Stack fontSize="sm" textColor="primary">
              <Link>درباره تریپر</Link>
              <Link>قوانین و مقررات</Link>
              <Link>فرصت شغلی</Link>
              <Link>پشتیبانی</Link>
            </Stack>
          </Flex>
          <Stack
            justify={{
              base: 'center',
              sm: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
            alignItems={{
              base: 'center',
              sm: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
          >
            <Box>
              <Image
                src="/images/samandehi.png"
                layout="fixed"
                width={115 / 1.3}
                height={150 / 1.3}
                alt="samandehi"
              />
              <Image
                src="/images/enamad.png"
                layout="fixed"
                width={138 / 1.3}
                height={150 / 1.3}
                alt="enamad"
              />
            </Box>
            <SocialButtons />
            <Text fontSize="xs" textColor="primary">
              تمامی حقوق برای تریپر محفوظ است. | ۱۴۰۰ ©
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
