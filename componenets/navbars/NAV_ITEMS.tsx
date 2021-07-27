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
import { FiFeather, FiShoppingBag } from 'react-icons/fi';
import { FiBookOpen, FiUsers } from 'react-icons/fi';

import { NavItem } from './NavItem';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'سفر',
    icon: <MdCardTravel />,
    href: '/travel_solutions',
    children: [
      {
        label: 'سفرنامه‌ها',
        icon: <FiFeather />,
        subLabel: 'سفرها و تجربیات دیگران را بخوانید',
      },
      {
        label: 'سفر برو‌ها',
        icon: <RiMapPinUserLine />,
        subLabel: 'گشت و گذار میان مسافران',
      },
      {
        label: 'جاذبه‌ها',
        icon: <HiOutlineLocationMarker />,
        subLabel: 'از میان جاذبه‌ها و فعالیت‌ها کشف کنید',
      },
      {
        label: 'مقالات',
        icon: <RiArticleLine />,
        subLabel: 'همه‌ی آنچیزی که باید برای سفر کردن بدانید',
      },
    ],
  },
  {
    label: 'همسفر',
    icon: <AiOutlineUsergroupAdd />,
    href: '/fellow-traveler',
  },
  {
    label: 'سفرساز',
    icon: <ImMagicWand />,
    href: '/travel-wizard',
  },
  {
    label: 'درباره تریپر',
    icon: <AiOutlineInfoCircle />,
    href: '/about',
  },
  {
    label: 'پشتیبانی',
    icon: <BiSupport />,
    href: '/support',
  },
];
