import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Sidebar = () => {
  const sidebarMenu = [
    {
      name: 'Dashboard',
      icon: 'dashboard-icon',
      link: '/dashboard',
    },
    
    {
      name: 'Account',
      icon: 'account-icon',
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
      icon: 'authentication-icon',
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
      icon: 'subscriptions-icon',
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
      icon: 'chat-icon',
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
      icon: 'pages-icon',
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
      icon: 'calendar-icon',
      link: '/calendar',
    },
  ];
  const location = useLocation()
  const activePath = location.pathname
  const matchingSubmenuIndex = sidebarMenu.findIndex((item) =>
    item.submenus?.some((submenuItem) => activePath.startsWith(submenuItem.link))
  );
  const [expanded, setExpanded] = useState(matchingSubmenuIndex);
  const handleToggle = (idx) => {
    setExpanded((prevExpanded) => (prevExpanded === idx ? null : idx));
  };
  return (
    <>
    <div className='h-screen fixed z-50 w-72 duration-1000  flex items-start justify-between flex-col top-0 left-0 bg-white box-shadow'>
      <span className='block px-8 py-4 w-full'>
        <span className='block w-8 h-8 rounded-md overflow-hidden bg-blue-500'><img src={logo} className='w-full h-full object-fill' alt="" /></span>
      </span>
      <ul className='p-4 flex-1 h-2/3 overflow-hidden dontShowScroll overflow-y-auto w-full'>
        {sidebarMenu.map((item, idx) => (
          <li key={idx}>
            <span
              className='peer p-4 flex items-center justify-between cursor-pointer'
              onClick={()=>{handleToggle(idx)}} // Toggle submenu on click
            >
              <p className={`font-semibold duration-500 text-[12px] ${expanded == idx ? 'text-blue-500' : ''}`}>{item.name}</p>  {/* this is menu name */}
              {item.submenus && <i className={`bx duration-500  ${expanded == idx ? 'rotate-180' : ''}  ${expanded == idx ? 'bx-minus text-blue-500' : 'bx-plus'}`}></i>}
            </span>
            <ul
              className={`${
                item.submenus && expanded === idx ? 'max-h-[400px] duration-1000' : 'duration-700 max-h-0 '
              }  overflow-hidden`}
            >
              {item.submenus &&
                item.submenus.map((submenuItem, idx) => (
                  <li key={idx} className='pl-8 p-4 w-full'>
                    <Link to={`${submenuItem.link}`}><p className={`font-medium text-[12px] ${activePath.startsWith(submenuItem.link) ? 'text-blue-500 ' : 'text-black/80'}`}>{submenuItem.name}</p> {/* this is submenu name */}</Link>
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