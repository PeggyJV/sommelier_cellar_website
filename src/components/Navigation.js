import Link from 'gatsby-link'
import React, { useState, useEffect } from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

import logoImg from '@images/logo.png'
import spiralImg from '@images/spiral-2.png'
import notificationOffImg from '@images/notification-off.png';
import notificationOnImg from '@images/notification-on.png';

import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

import cn from 'classnames';

const Nav = ({ settings, lang, pathname }) => {
  const [showMenu, setShowMenu] = React.useState(isMobileOnly ? false : true);
  const [menu, setMenu] = useState('features');

  const [notification, setNotification] = useState(false);
  const [notificationErrMsg, setNotificationErrMsg] = useState('');

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  useEffect(() => {
    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
      console.log(url);
    }

    if (url.includes('features')) {
      setMenu('features');
    }
    if (url.includes('usecases')) {
      setMenu('usecases');
    }
    if (url.includes('about-us')) {
      setMenu('about');
    }
    if (url.includes('blog')) {
      setMenu('blog');
    }
    if (url.includes('resources')) {
      setMenu('resources');
    }
    if (url.includes('events')) {
      setMenu('events');
    }

    checkNotificationPermission();
  }, []);

  const handleHamburger = () => {
    setShowMenu(!showMenu)
  }

  const handleMoveToSection = (e, msgId) => {
    if (pathname === '/') { // Only apply to home page
      e.preventDefault();
      setShowMenu(false);
      const ref = document.querySelector(`#${msgId}`);
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
        setMenu(msgId);
      }
    }
  }

  const checkNotificationPermission = () => {
    console.info('starting.....');
    if (typeof window === `undefined`) {
      setNotification(false);
      return;
    }

    if (!("Notification" in window)) {
      setNotification(false);
      setNotificationErrMsg('This browser does not support notifications.');
      return;
    }

    console.log('notification permission', Notification.permission);
    if (Notification.permission === 'denied') {
      setNotification(false);
      setNotificationErrMsg('To allow Notifications, go to your Browser Settings.');
      return;
    }

    if (Notification.permission === 'default') {
      setNotification(false);
      return;
    }

    if (Notification.permission === 'granted') {
      setNotification(true);

      enableNotifications();
    }
  }

  const askNotificationPermission = () => {
    if (typeof window === `undefined`) {
      return;
    }

    if (!("Notification" in window)) {
      setNotification(false);
      setNotificationErrMsg('This browser does not support notifications.');
    } else {
      if(checkNotificationPromise()) {
        Notification.requestPermission()
        .then((permission) => {
          checkNotificationPermission();
        })
      } else {
        Notification.requestPermission(function(permission) {
          checkNotificationPermission();
        });
      }
    }
  }

  const checkNotificationPromise = () => {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }

  const toggleNotification = (e) => {
    e.preventDefault();

    console.log(Notification.permission);

    if (notification === false) {
      askNotificationPermission();
    } else {

    }
  }

  const enableNotifications = async () => {
    if (typeof window === `undefined`) {
      return;
    }
console.log('11111111111111111');
    if (!('serviceWorker' in navigator)) {
      return;
    }
    console.log('2222222222222222222');
    if (!('PushManager' in window)) {
      return;
    }
    console.log('33333333333333333');
    console.log(navigator);

    const sw = await navigator.serviceWorker.ready;
    console.log(sw);
    const result = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BNDpN_mS7a-Os4xUorT-NPjhgRpgK7GoWsggHFF5psOTgbn5SPeo_G6rJeFzjqtVazgmt5bZDdHrsrGZH4uSJkE'
    });

    console.log('service worker', result);
  }

  return (
    <header className='container-fluid'>
      <nav className='' role='navigation'>
        <div className='nav-container d-flex '>
          <div className='text-primary nav-container__title'>
            <button
              onClick={handleHamburger}
              className={cn({
                'd-block': true,
                'd-sm-none': true,
                'nav-hamburger': showMenu
              })}
            >
              <img src='/images/button-hamburger.png' width='24' />
            </button>
            <Link to='/'>
              <img src={logoImg} />
              {/* <p className='nav-title m-0'>SOMMELIER</p> */}
            </Link>

          </div>
          {showMenu && (
            <div className='nav-container__menu-mask'></div>
          )}
          {showMenu && (
            <div className='flex-grow-1 nav-container__menu-container'>
              <ul className='ml-auto nav-container__menu-wrapper'>

                <li key={0} >
                  <a
                    href='/#features' onClick={(e) => handleMoveToSection(e, 'features')}
                    className='nav-menu-item nav-menu-logo'
                  >
                    <img src={spiralImg} height={26}/>Sommelier
                  </a>
                </li>

                <li key={1} className={cn({ active: menu === 'features' })}>
                  <a href='/#features' onClick={(e) => handleMoveToSection(e, 'features')} className={cn('nav-menu-item', { active: menu === 'features' })}>Features</a>
                </li>

                <li key={2} className={cn({ active: menu === 'usecases' })}>
                  <a href='/#usecases' onClick={(e) => handleMoveToSection(e, 'usecases')} className={cn('nav-menu-item', { active: menu === 'usecases' })}>Use Cases</a>
                </li>

                <li key={3} className={cn({ active: menu === 'about' })}>
                  <a href='/about-us' className={cn('nav-menu-item', { active: menu === 'about' })}>About</a>
                </li>

                <li key={4} >
                  <Link to={`https://community.sommelier.finance/`} className='nav-menu-item' target='new'>
                    {`Community`}
                  </Link>
                </li>

                <li key={5} className={cn({ active: menu === 'blog' })}>
                  <Link to={`/blog/`} className={cn('nav-menu-item', { active: menu === 'blog' })}>
                    {`Blog`}
                  </Link>
                </li>
                <li key={6} className={cn({ active: menu === 'resources' })}>
                  <Link to={`/resources/`} className={cn('nav-menu-item', { active: menu === 'resources' })}>
                    {`Resource`}
                  </Link>
                </li>
                <li key={7} className={cn({ active: menu === 'events' })}>
                  <Link to={`/events/`} className={cn('nav-menu-item', { active: menu === 'events' })}>
                    {`Event`}
                  </Link>
                </li>
                <li key={8}>
                    <a
                      className='nav-menu-item'
                      onClick={(e) => toggleNotification(e)}
                      ref={setTriggerRef}
                    >
                      {!notification && <img src={notificationOffImg} height={27} />}
                      {notification && <img src={notificationOnImg} height={27} />}

                    </a>
                    {visible && !notification && notificationErrMsg && (
                      <div
                        ref={setTooltipRef}
                        {...getTooltipProps({ className: 'tooltip-container' })}
                      >
                        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                        {notificationErrMsg}
                      </div>
                    )}
                </li>

                <li key={999} className='d-flex align-items-center'>
                  <a href="https://app.sommelier.finance" className='nav-menu-item nav-menu-item--launch' target="_blank">
                    Add Liquidity
                  </a>
                </li>
              </ul>
            </div>

          )}
        </div>
      </nav>
    </header>
  )
};

export default Nav;
