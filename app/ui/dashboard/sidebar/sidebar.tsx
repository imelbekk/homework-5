import React, { ReactNode } from 'react'

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  // MdLogout,
} from 'react-icons/md'
import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

interface MenuItems {
  title: string;
  list: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
  icon: ReactNode
}

const menuItems:MenuItems[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle/>
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag/>
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney/>
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork/>
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics/>
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople/>
      },
    ]
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings/>
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter/>
      },
    ]
  }
]

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
        src="/avaa.png"
        className={styles.userImage}
        alt='avatar'
        width='50'
        height='50'
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul>
        {
          menuItems.map((item,index)=>(
            <li key={index} className={styles.list}>
              <span className={styles.cat}>{item.title}</span>
              {
                item.list.map(list=>(
                  <MenuLink key={list.title} menu={list}/> 
                ))
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
