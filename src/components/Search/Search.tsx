import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import s from './Search.module.scss';

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    value.trim() && navigate(`/search/${value}`);
  };

  const { t } = useTranslation();

  return (
    <div>
      <form className={s.searchForm} onClick={handleSubmit}>
        <input
          className={s.searchInput}
          placeholder={t('header.placeholder')}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className={s.searchIcon} onClick={handleSubmit}>
          <BsSearch />
        </span>
      </form>
    </div>
  );
};
