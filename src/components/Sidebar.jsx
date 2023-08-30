import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg'

const Sidebar = () => {
  const sidebarMenu = [
    {
      name: 'Dashboard',
      icon: 'bxs-dashboard',
      link: '/dash',
    },
    
    {
      name: 'Account',
      icon: 'bx-stats',
      link: '/account',
      submenus: [
        {
          name: 'Settings',
          link: '/account/settings',
        },
        {
          name: 'Campaigns',
          link: '/account/campaigns',
        },
        {
          name: 'Connections',
          link: '/account/connections',
        },
        {
          name: 'Documents',
          link: '/account/documents',
        },
        {
          name: 'Projects',
          link: '/account/projects',
        },
        {
          name: 'Activity',
          link: '/account/activity',
        },
      ],
    },
    {
      name: 'Authentication',
      icon: 'bx-link',
      link: '/authentication',
      submenus: [
        {
          name: 'Base',
          link: '/authentication/base',
        },
        {
          name: 'Extended',
          link: '/authentication/extended',
        },
        {
          name: 'General',
          link: '/authentication/general',
        },
        {
          name: 'Email',
          link: '/authentication/email',
        },
      ],
    },
    {
      name: 'Subscriptions',
      icon: 'bx-add-to-queue',
      link: '/subscriptions',
      submenus: [
        {
          name: 'Getting Started',
          link: '/subscriptions/getting-started',
        },
        {
          name: 'Subscription List',
          link: '/subscriptions/list',
        },
        {
          name: 'Add Subscription',
          link: '/subscriptions/add',
        },
        {
          name: 'View Subscription',
          link: '/subscriptions/view',
        },
      ],
    },
    {
      name: 'Chat',
      icon: 'bx-chat',
      link: '/chat',
      submenus: [
        {
          name: 'Private Chat',
          link: '/chat/private',
        },
        {
          name: 'Group Chat',
          link: '/chat/group',
        },
        {
          name: 'Drawer Chat',
          link: '/chat/drawer',
        },
      ],
    },
    {
      name: 'Products',
      icon: 'bx-package',
      link: '/Products',
      submenus: [
        {
          name: 'Add Product',
          link: '/Products/add-product',
        },
        {
          name: 'Edit Product',
          link: '/Products/edit-product',
        },
      ]
    },
      {
          name: 'Contacts',
          icon: 'bx-phone',
          link: '/Contacts',
          submenus: [
            {
              name: 'Getting Started',
              link: '/Contacts/getting-started',
            },
            {
              name: 'Add Contact',
              link: '/Contacts/add-contact',
            },
            {
              name: 'Edit Contact',
              link: '/Contacts/edit-contact',
            },
        {
          name: 'View Contact',
          link: '/Contacts/view-contact',
        },
      ],
    },
    {
      name: 'Pages',
      icon: 'bx-spreadsheet',
      link: '/pages',
      submenus: [
        {
          name: 'About Us',
          link: '/pages/about-us',
        },
        {
          name: 'Invoice',
          link: '/pages/invoice',
        },
        {
          name: 'FAQ',
          link: '/pages/faq',
        },
        {
          name: 'Wizard',
          link: '/pages/wizard',
        },
        {
          name: 'Pricing',
          link: '/pages/pricing',
        },
      ],
    },
    {
      name: 'Calendar',
      icon: 'bx-calendar-alt',
      link: '/calendar',
    },
  ];
  const location = useLocation()
  const activePath = location.pathname
  const matchingSubmenuIndex = sidebarMenu.findIndex((item) =>
    item.submenus?.some((submenuItem) => activePath.startsWith(submenuItem.link))
  );
  const [expanded, setExpanded] = useState(matchingSubmenuIndex);
  const navigateTo = (route) => {window.location.href = route;};
  const handleToggle = (idx) => {
    setExpanded((prevExpanded) => (prevExpanded === idx ? null : idx));
  };
  return (
    <>
    <div className='h-screen grop fixed lg:flex md:flex sm:hidden z-50 w-72 duration-1000  flex items-start justify-between flex-col top-0 left-0 bg-white border-r-[1px] border-black/5'>
      <span className='flex items-center justify-between w-full p-4'>
        <img src={logo} className='w-8 h-8 object-cover' alt="" />
        <i class='bx bx-dots-vertical-rounded'></i>
      </span>
      <ul className=' flex-1 h-2/3 overflow-hidden dontShowScroll overflow-y-auto w-full'>
        {sidebarMenu.map((item, idx) => (
          <li onClick={()=>{{!item.submenus && navigateTo(item.link)}}} key={idx}>
            <span className='peer flex items-center p-4 justify-between cursor-pointer' onClick={()=>{handleToggle(idx)}}>
              <span className='flex items-center space-x-2'>
                <i className={`bx ${item.icon} duration-500 ${activePath.includes(item.link) || expanded == idx ? 'scale-x-[-1] text-violet-500' : 'text-gray-600/80' } ${expanded == idx  ? 'scale-x-[-1] text-violet-500' : 'text-gray-600/80'}`}></i>
              <p className={`font-semibold duration-500 text-[12px] ${activePath.includes(item.link) || expanded == idx ? 'text-violet-500' : 'text-gray-600/80'}`}>{item.name}</p>  {/* this is menu name */}</span>
              {item.submenus && <i className={`bx duration-500 bx-chevron-down  ${expanded == idx ? 'rotate-180 text-violet-500' : 'text-gray-600/80'}`}></i>}
            </span>
            <ul
              className={` ${
                item.submenus && expanded === idx ? 'max-h-[400px] duration-1000' : 'duration-700 max-h-0 '
              }  overflow-hidden`}
            >
              {item.submenus &&
                item.submenus.map((submenuItem, idx) => (
                  <li key={idx} className={`mx-8 px-4 py-2 relative before:absolute before:w-[1px]  rounded-md before:bg-black/5 before:-left-2 before:h-full ${activePath.startsWith(submenuItem.link) ? ' bg-gray-50/80' : 'hover:bg-gray-50/5'}`}>
                    <Link to={`${submenuItem.link}`}><p className={` text-[12px] ${activePath.startsWith(submenuItem.link) ? 'font-semibold opacity-100 text-gray-500 ' : 'opacity-50 text-black/80 font-normal'}`}>{submenuItem.name}</p> {/* this is submenu name */}</Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Sidebar

// const side = useRef()
// useEffect(()=>{console.log(side.current.offsetWidth)},[])