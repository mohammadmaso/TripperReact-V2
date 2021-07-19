import React from 'react';
import { ImMagicWand } from 'react-icons/im';
import { AiOutlineAppstore, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiBed, BiBook, BiSupport } from 'react-icons/bi';
import { MdFlightTakeoff } from 'react-icons/md';
import { RiRoadMapLine } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import { FiBookOpen, FiUsers } from 'react-icons/fi';

import { NavItem } from './NavItem';

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: ' دوره‌ها',
    icon: <FiBookOpen />,
    href: '/course/',
  },
  {
    label: 'اساتید',
    icon: <FiUsers />,
    href: '/teachers',
  },
  {
    label: 'درباره آکادمی',
    icon: <AiOutlineInfoCircle />,
    href: '/about',
  },
  {
    label: 'پشتیبانی',
    icon: <BiSupport />,
    href: '/support',
  },
];
