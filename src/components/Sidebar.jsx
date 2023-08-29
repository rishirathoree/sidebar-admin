import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const sidebarMenu = [
    {
      name: 'Dashboard',
      icon: 'dashboard-icon',
      link: '/dashboard',
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
      name: 'Account',
      icon: 'account-icon',
      link: '/account',
      submenus: [
        {
          name: 'Overview',
          link: '/account/overview',
        },
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
  console.log(activePath)
  const handleToggle = (idx) => {
    setExpanded((prevExpanded) => (prevExpanded === idx ? null : idx));
  };
  return (
    <>
    <div className='h-screen fixed z-50 w-72 overflow-hidden overflow-y-auto dontShowScroll top-0 left-0 bg-white box-shadow'>
      <ul className='p-8 '>
        {sidebarMenu.map((item, idx) => (
          <li key={idx}>
            <span
              className='peer flex items-center justify-between p-4 cursor-pointer'
              onClick={()=>{handleToggle(idx)}} // Toggle submenu on click
            >
              <p className={`font-semibold duration-500 text-[12px] ${expanded == idx ? 'text-blue-500' : ''}`}>{item.name}</p>  {/* this is menu name */}
              {item.submenus && <i className={`bx duration-200 bx-chevron-down ${expanded == idx ? 'rotate-180' : ''}  ${expanded == idx ? 'text-blue-500' : ''}`}></i>}
            </span>
            <ul
              className={`${
                item.submenus && expanded === idx ? 'max-h-[400px] duration-1000' : 'duration-1000 max-h-0 '
              }  overflow-hidden overflow-hidden`}
            >
              {item.submenus &&
                item.submenus.map((submenuItem, idx) => (
                  <li key={idx} className='pl-8 w-full p-4'>
                    <p className={`font-medium text-[12px] ${activePath.startsWith(submenuItem.link) ? 'text-blue-500 ' : 'text-black/80'}`}>{submenuItem.name}</p> {/* this is submenu name */}
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