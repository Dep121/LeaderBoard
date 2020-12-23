import React from 'react';
import s from './index.module.scss';

function ListItem({ leftText, rightText, content1, content2, content3 }) {
  return (
    <span className={s.list}>
      <span className={s.left}>{leftText}</span>
      <span className={s.mid}>{content1.value}</span>
      <span className={s.mid}>{content2.value}</span>
      <span className={s.mid}>{content3.value}</span>
      <span className={s.right}>{rightText}</span>
    </span>
  );
}

export default ListItem;
