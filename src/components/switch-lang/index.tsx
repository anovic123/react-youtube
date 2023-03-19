import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './style.module.scss';

export const SwitchLang = () => {
  const { i18n } = useTranslation();

  const changesLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={s.switchLangs}>
      <button
        className={`${s.switchLangBtn} ${i18n.language === 'ru' ? s.active : ''}`}
        onClick={() => changesLanguage('ru')}
      >
        RU
      </button>
      <button
        className={`${s.switchLangBtn} ${i18n.language === 'en' ? s.active : ''}`}
        onClick={() => changesLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};
