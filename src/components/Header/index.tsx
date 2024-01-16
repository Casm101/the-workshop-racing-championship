'use client'
/* eslint-disable @next/next/no-img-element */

// Style imports
import { useState } from 'react';
import { Marquee } from '..';
import './styles.scss';


// Header props
interface HeaderProps {
  logo: string;
  notification?: string;
}

// Header component declaration
export const Header = ({ logo, notification }: HeaderProps) => {

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarClass = isSidebarOpen ? 'open' : null;
  const sidebarIcon = isSidebarOpen ? '/close.svg' : '/menu.svg';


  return (
    <>
      <header className="header-styled">
        {notification &&
          <Marquee text={notification} />
        }
        <div className="header-content">
          <a href="/">
            <img className="logo" src={logo} alt="The Workshop Racing Championship" />
          </a>

          <div className='sidebar-button' onClick={() => setSidebarOpen(prev => !prev)}>
            <img src={sidebarIcon} alt="Sidebar icon" />
          </div>

          <div className="link-list">
            <a href="/standings">Standings</a>
            <a href="/drivers">Drivers</a>
            <a href="/point-system">Point System</a>
            <a href="/drivers/sign-up">
              <img src="/user-plus.svg" alt="Driver sign-up image" />
            </a>
          </div>
        </div>
      </header>

      <div className={["sidebar", sidebarClass].join(' ')}>
        <a href="/standings">Standings</a>
        <a href="/drivers">Drivers</a>
        <a href="/point-system">Point System</a>
        <a href="/drivers/sign-up">Sign up</a>
      </div>
    </>
  );
};
