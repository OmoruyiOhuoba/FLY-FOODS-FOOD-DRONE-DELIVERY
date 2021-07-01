import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import Logo from "../../assets/logo-2.png";

import {Link} from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  const props = useSpring({
    opacity: open ? 1 : 0,
    zIndex: open ? 1 : -1,
    minHeight: open ? '50%' : '0%',
    config: { ...config.molasses, duration: 450 },
  });

  return (
    <div className='sticky'>
      <header className='header'>
          <a href="/"><img src={Logo} className= "logo" alt="logo"/></a>
        <nav>
          <ul className='nav-links'>
            <li className='nav-item'>
              <Link
                to='/whoweare'
                onClick={() => setActive('whoweare')}
                className={active === 'whoweare' ? 'active' : null}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/prices'
                onClick={() => setActive('prices')}
                className={active === 'prices' ? 'active' : null}
              >
                PRICES
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signinuserorrider'
                onClick={() => setActive('sign-in')}
                className={active === 'sign-in' ? 'active' : null}
              >
                SIGN IN
              </Link>
            </li>
            <li className='nav-item cont'>
              <Link
                to='/signupuserorrider'
                onClick={() => setActive('sign-up')}
                className={active === 'sign-up' ? 'active' : null}
              >
                SIGN UP
              </Link>
            </li>
                       
          </ul>
          <div onClick={() => setOpen(!open)} className='hamburger'>
            <div className={open ? 'hamburger-icon none' : 'hamburger-icon'}>
              <span className="cross"></span>
              <span className="cross"></span>
            </div>
          </div>
        </nav>
        <animated.div style={props} className='menubar'>
          <ul className='menu-links'>
            <li className='nav-item dropped'>
              <Link
                to='/whoweare'
                onClick={() => setActive('whoweare')}
                className={active === 'whoweare' ? 'active' : null}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/prices'
                onClick={() => setActive('prices')}
                className={active === 'prices' ? 'active' : null}
              >
                PRICES
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/signinuserorrider'
                onClick={() => setActive('sign-in')}
                className={active === 'sign-in' ? 'active' : null}
              >
                SIGN IN
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/signupuserorrider'
                onClick={() => setActive('sign-up')}
                className={active === 'sign-up' ? 'active' : null}
              >
                SIGN UP
              </Link>
            </li>
     
          </ul>
        </animated.div>

      </header>
      <div className="below-header">
      <p className="below-p">nav</p>
      </div>
    </div>
  );
};

export default NavBar;




