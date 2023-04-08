import { FC } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsYoutube, BsLamp } from 'react-icons/bs';

import { SwitchLang, Search } from '../../';

import { useMediaQuery } from '../../../hooks';

import s from './style.module.scss';

interface HeaderProps {
  handleOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ handleOpen }) => {
  const isTablet = useMediaQuery(900);
  const isMobile = useMediaQuery(600);

  return (
    <>
      <header className={s.header}>
        <div className={s.headerLeft}>
          {!isMobile && <GiHamburgerMenu onClick={handleOpen} className={s.burgerMenuIcon} />}
          <Link to="/">
            <span className={s.headerLogo}>
              <BsYoutube className={s.headerLogo} />
              YouTube
            </span>
          </Link>
        </div>
        <Search />
        {!isTablet && (
          <div className={s.headerRight}>
            <span className={s.headerSwitcher}>
              <SwitchLang />
            </span>
          </div>
        )}
      </header>
    </>
  );
};
