import React, { FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SwitchLang } from '../../components/SwitchLang/SwitchLang';
import { BsYoutube, BsLamp } from 'react-icons/bs';
import { Search } from '../../components/Search/Search';
import s from './Header.module.css';

interface HeaderProps {
  handleOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ handleOpen }) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerLeft}>
          <GiHamburgerMenu onClick={handleOpen} className={s.burgerMenuIcon} />
          <span className={s.headerLogo}>
            <BsYoutube className={s.headerLogo} />
            YouTube
          </span>
        </div>
        <Search />
        <div className={s.headerRight}>
          <span className={s.headerSwitcher}>
            <SwitchLang />
          </span>
          <BsLamp />
        </div>
      </header>
    </>
  );
};
