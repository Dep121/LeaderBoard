import React from 'react';
import './index.css';

function Header({children}) {
  return (
    <div className={'header'}>
      {children}
    </div>
  );
}

export default Header;
