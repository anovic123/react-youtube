import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';

import s from './Search.module.css';

export const Search = () => {
  const { t } = useTranslation();

  return (
    <div>
      <form className={s.searchForm}>
        <input className={s.searchInput} placeholder={t('header.placeholder')} type="text" />
        <span className={s.searchIcon}>
          <BsSearch />
        </span>
      </form>
    </div>
  );
};
