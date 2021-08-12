import { Box, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing="5">
        <Box p="4" rounded="lg" shadow="lg">
          <Heading fontSize="3xl" fontWeight="light">
            در مسیر یک رویا
          </Heading>
          <Divider my="2" />
          <Text fontWeight="light">
            تریپر یک راهکار جامع گردشگری است. در تریپر تلاش می‌کنیم بر نیاز‌های
            گردشگر تمرکز کنیم و راهکاری سریع، آسان و ارزان برای گردشگران تولید
            کنیم.  در حال حاضر تریپر شامل شبکه اجتماعی سفر می‌باشد،‌ شبکه
            اجتماعی‌ای که تمامی گردشگران، بلاگر‌ها و راهنمایان تور می‌توانند در
            آن پروفایل داشته باشند، سفرنامه‌های خود را با دقیق‌ترین و کامل‌ترین
            سفرنامه ساز در سطح جهانی بسازند و با دیگران به اشتراک بگذارند و
            براساس امتیاز‌ها و سفرنامه ‌های خود از تخفیف‌های متنوع و امتیاز‌های
            متنوعی برخوردار شوند همچنین افراد می‌توانند سفربرو‌های مورد علاقه
            خود را دنبال کنند و تا آخرین مطالب و سفر‌های آن‌ها را پیگیری کنند و
            سفرنامه‌های یکدیگر را نقد و امتیاز‌دهی کنند. درحال حاضر تیم تریپر در
            تلاش است بزرگترین و کامل‌ترین بانک جاذبه‌های گردشگری را برای
            سفرنامه‌نویس‌ها و کاربران فراهم کند، مکان‌ها دسته‌بندی‌های جامعی
            دارند و اطلاعات و توضیحات و تصاویر آنها فراهم شده است، همچنین
            فعالیت‌هایی که در هر مکان می‌تواند صورت بگیرد نیز به صورت منحصر به
            فرد و برای اولین بار گردآوری شده که به گردشگران کمک می‌کند بتوانند
            برحسب نیاز خود بهترین مکان‌ها برای گردشگری و ماجراجویی خود انتخاب
            کنند.
            <Divider variant="dashed" py="2" />
            <br /> استارتاپ تریپر از ابتدای سال ۱۳۹۹ فعالیت‌ خود را آغاز کرده و
            برنامه‌های توسعه متنوعی در دست اقدام دارد، شبکه‌اجتماعی در نسخه
            اولیه منتشر شده است، در نسخه‌های بعدی تریپر سفر های گروهی، تورهای
            متنوع و با کیفیت و سفرساز به لیست خدمات تریپر اضافه خواهد شد که در
            نوع خود برای اولین بار در ایران و جهان این خدمات جامع به گردشگران
            ارائه می‌گردد.{' '}
          </Text>
        </Box>
        {/* <Box p="4" rounded="lg" shadow="lg"></Box> */}
      </SimpleGrid>
    </BaseLayout>
  );
}
