import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './style.module.scss';
import { categoriesF } from '../../utils/contstants';

interface SidebarProps {
  open: boolean;
  handleOpen: () => void;
}

type CategoryType = 'New' | 'Comedy' | 'Movies' | 'Games' | 'Music' | 'Live' | 'Sport';

export const Sidebar: FC<SidebarProps> = ({ open, handleOpen }) => {
  const sidebarClass = s.sidebar + (!open ? ' ' + s.small : ' ' + s.big);
  const [category, setCategory] = useState<CategoryType>('New');

  const { t } = useTranslation();

  const navigate = useNavigate();

  const onClick = (category: CategoryType) => {
    setCategory(category);
    navigate(`/search/${category}`);
  };

  return (
    <>
      <aside className={sidebarClass}>
        {open ? (
          <nav className={s.nav}>
            {categoriesF.map((c) => (
              <a onClick={() => onClick(t(c.name))} key={c.name}>
                {c.icon}
                <span>{t(c.name)}</span>
              </a>
            ))}
          </nav>
        ) : (
          <nav className={s.nav}>
            {categoriesF.map((c) => (
              <a onClick={() => onClick(t(c.name))} key={c.name}>
                {c.icon}
              </a>
            ))}
          </nav>
        )}
      </aside>
    </>
  );
};
