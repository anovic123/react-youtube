import { useState, useEffect, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import s from './style.module.scss';

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    value.trim() && navigate(`/search/${value}`);
  };

  useEffect(() => {
    localStorage.setItem('searchValue', value);
  }, [value]);

  const handleClearSearch = () => {
    setValue('');
  };

  return (
    <div>
      <form className={s.searchForm} onClick={handleSubmit}>
        <input
          className={s.searchInput}
          placeholder='Search'
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className={s.searchIcon} onClick={handleSubmit}>
          <BsSearch />
        </span>
        {value && <AiOutlineClose className={s.searchClose} onClick={handleClearSearch} />}
      </form>
    </div>
  );
};
