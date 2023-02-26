import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import error from '../../assets/images/404.png';

import s from './ErrorPage.module.scss';

export const ErrorPage = () => {
  useEffect(() => {
    document.title = '404 Not Found';

    return () => {
      document.title = 'YouTube';
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <img src={error} alt="Error page"/>
      <br />
      <span>{t('errorPage.span')}</span>
      <h2>{t('errorPage.h2')}</h2>
      <p>{t('errorPage.p')}</p>
      <Link to="/">{t('errorPage.button')}</Link>
    </div>
  );
};
