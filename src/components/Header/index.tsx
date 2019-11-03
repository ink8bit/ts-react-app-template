import React from 'react';
import { Link } from '@reach/router';

import s from './styles.css';

const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className={s.header}>
      <Link to="/">Link</Link>
    </header>
  );
};

export default Header;
