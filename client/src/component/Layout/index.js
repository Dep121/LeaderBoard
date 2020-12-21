import React from 'react';
import './index.css';

function Layout({children}) {
  return (
    <div className={'layout'}>
      {children}
    </div>
  );
}

export default Layout;
