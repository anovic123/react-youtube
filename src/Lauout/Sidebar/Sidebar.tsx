import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RiLiveFill } from 'react-icons/ri';
import { CgGames } from 'react-icons/cg';
import { MdLocalMovies } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa';
import { MdSportsBaseball, MdTheaterComedy } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';

import youtubeCategory from '../../api/youtube-category';

import s from './Sidebar.module.scss';

interface SidebarProps {
  open: boolean;
  handleOpen: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ open, handleOpen }) => {
  const sidebarClass = s.sidebar + (!open ? ' ' + s.small : ' ' + s.big);
  // const [category, setCategory] = React.useState<any>('Comedy');

  const { t } = useTranslation();

  // React.useEffect(() => {
  //   youtubeCategory(category).then((el: any) => {
  //     console.log(el);
  //   });
  // }, [category]);

  return (
    <>
      <aside className={sidebarClass}>
        {open ? (
          <nav className={s.nav}>
            <Link to="" className={s.active}>
              <AiFillHome />
              <span>{t('sidebar.cat1')}</span>
            </Link>
            <Link to="">
              <MdTheaterComedy />
              <span>{t('sidebar.cat2')}</span>
            </Link>
            <Link to="">
              <MdLocalMovies />
              <span>{t('sidebar.cat3')}</span>
            </Link>
            <Link to="">
              <CgGames />
              <span>{t('sidebar.cat4')}</span>
            </Link>
            <Link to="">
              <FaMusic />
              <span>{t('sidebar.cat5')}</span>
            </Link>
            <Link to="">
              <RiLiveFill />
              <span>{t('sidebar.cat6')}</span>
            </Link>
            <Link to="">
              <MdSportsBaseball />
              <span>{t('sidebar.cat7')}</span>
            </Link>
          </nav>
        ) : (
          <nav className={s.nav}>
            <Link to="" className={s.active}>
              <AiFillHome />
            </Link>
            <Link to="">
              <MdTheaterComedy />
            </Link>
            <Link to="">
              <MdLocalMovies />
            </Link>
            <Link to="">
              <CgGames />
            </Link>
            <Link to="">
              <FaMusic />
            </Link>
            <Link to="">
              <RiLiveFill />
            </Link>
            <Link to="">
              <MdSportsBaseball />
            </Link>
          </nav>
        )}
      </aside>
    </>
  );
};
