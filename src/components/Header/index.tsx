import type { ReactElement } from 'react';

import React from 'react';
import { Link } from '@reach/router';

import s from './styles.css';

function Header(): ReactElement {
  return (
    <header className={s.header}>
      <Link to="/">Header link</Link>
    </header>
  );
}

export default Header;
