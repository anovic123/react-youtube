import React, { FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SwitchLang } from '../../components/switch-lang';
import { BsYoutube, BsLamp } from 'react-icons/bs';
import { Search } from '../../components/search';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

interface HeaderProps {
  handleOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ handleOpen }) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerLeft}>
          <GiHamburgerMenu onClick={handleOpen} className={s.burgerMenuIcon} />
          <Link to="/">
            <span className={s.headerLogo}>
              <BsYoutube className={s.headerLogo} />
              YouTube
            </span>
          </Link>
        </div>
        <Search />
        <div className={s.headerRight}>
          <span className={s.headerSwitcher}>
            <SwitchLang />
          </span>
          <span className={s.headerTheme}>
            <BsLamp />
          </span>
        </div>
      </header>
    </>
  );
};
