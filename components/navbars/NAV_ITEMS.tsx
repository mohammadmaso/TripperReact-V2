import React from 'react';
import { ImMagicWand } from 'react-icons/im';
import {
  AiOutlineAppstore,
  AiOutlineInfoCircle,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { BiBed, BiBook, BiSupport } from 'react-icons/bi';
import { MdCardTravel, MdFlightTakeoff } from 'react-icons/md';
import { RiArticleLine, RiMapPinUserLine, RiRoadMapLine } from 'react-icons/ri';
import { FiFeather, FiMap, FiPhone, FiShoppingBag } from 'react-icons/fi';
import { FiBookOpen, FiUsers } from 'react-icons/fi';
import { Badge } from '@chakra-ui/react';

import { NavItem } from './NavItem';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { client } from '../../graphql/ApolloLink';
import {
  AllTourCategoriesDocument,
  AllTourCategoriesQuery,
  TourCategoryType,
} from '../../graphql/generated/types';
import async from 'react-select/async';

function ComingSoonBadge() {
  return <Badge colorScheme="green">به‌ زودی</Badge>;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'سفرنامه',
    icon: <FiFeather />,
    children: [
      {
        label: 'سفرنامه‌ها',
        icon: <FiFeather />,
        subLabel: 'سفرها و تجربیات دیگران را بخوانید',
        href: '/travelogues',
      },
      {
        label: 'سفر برو‌ها',
        icon: <RiMapPinUserLine />,
        subLabel: 'گشت و گذار میان مسافران',
        href: '/travelers',
      },
      {
        label: 'جاذبه‌ها',
        icon: <HiOutlineLocationMarker />,
        subLabel: 'از میان جاذبه‌ها و فعالیت‌ها کشف کنید',
        // href: '/places',
        badge: <ComingSoonBadge />,
      },
    ],
  },
  // {
  //   label: 'همسفر',
  //   icon: <AiOutlineUsergroupAdd />,
  //   // href: '/fellow-traveler',
  //   badge: <ComingSoonBadge />,
  // },
  // {
  //   label: 'تور',
  //   icon: <MdCardTravel />,
  //   href: '/tours',
  //   children: [
  //     {
  //       label: 'نقشه تور‌ها',
  //       icon: <FiMap />,
  //       subLabel: 'روی نقشه تور خود را پیدا کنید',
  //       href: '/tourmap',
  //     },
  //     {
  //       label: 'تمام تورها',
  //       icon: <FiFeather />,
  //       subLabel: 'تمامی تورها با دقیق‌ترین جزییات',
  //       href: '/tours',
  //     },
  //     {
  //       label: 'تور لیدرها',
  //       icon: <RiMapPinUserLine />,
  //       subLabel: 'تورلیدرهای  احراز هویت شده تریپر',
  //       href: '/tourguids',
  //     },
  //   ],
  // },
  {
    label: 'دانشنامه‌ی سفر',
    icon: <RiArticleLine />,
    href: '/articles',
  },
  // {
  //   label: 'سفرساز',
  //   icon: <ImMagicWand />,
  //   // href: '/wizard',
  //   badge: <ComingSoonBadge />,
  // },
  {
    label: 'درباره تریپر',
    icon: <AiOutlineInfoCircle />,
    href: '/about',
  },
  {
    label: 'تماس‌ با ‌ما',
    icon: <FiPhone />,
    href: '/contact',
  },
];
