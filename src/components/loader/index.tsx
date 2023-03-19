import React from 'react';

import s from './style.module.scss';

export const Loader = () => {
  return (
    <div className={s.container}>
      <div className={s.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
