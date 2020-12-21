import React from 'react';
import s from './index.module.scss';

function ListItem({ leftText, rightText, content1, content2, content3 }) {
  return (
    <div className={s.list}>
      <div className={s.left}>{leftText}</div>
        <div>{content1.value}</div>
        <div>{content2.value}</div>
        <div>{content3.value}</div>
      <div className={s.right}>{rightText}</div>
    </div>
  );
}

export default ListItem;
