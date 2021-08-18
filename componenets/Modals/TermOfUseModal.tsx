import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface Props {}

const TermOfUseModal = (props: any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>قوانین تریپر</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
          گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
          ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا
          طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی
          استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه
          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر
          می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی
          که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را
          ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با
          استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا
          مرحله طراحی و صفحه‌بندی را به پایان برند. توسط فرم زیر می توانید متن
          ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید،
          سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید. زبان مورد نظر خود
          را انتخاب کنید ... فارسی - لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ و... تعداد را انتخاب کنید پاراگراف 1 تولیدکننده
          لورم ایپسوم فارسی :: سرویسی رایگان از REALEYE | تبليغات در سايت لورم
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="primary" mr={3} onClick={props.onClose}>
            خواندم
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermOfUseModal;