import React from 'react';
import s from './index.module.scss';
import { ReactComponent as Close } from '../../assets/close.svg';

function Overlay({ children, onClose }) {
  return (<div className={s.overlayWrapper}>
    <div className={s.overlay}>
      <div className={s.header}>
        <span>Overlay header</span>
        <div className={s.closeIcon}>
          <Close onClick={onClose} />
        </div>
      </div>
      <div className={s.content}>
        {children}
      </div>
    </div>
  </div>)
}

export default Overlay;
