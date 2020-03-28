import React from 'react';
import { Link } from '@reach/router';

import s from './styles.css';

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <footer className={s.footer}>
      <Link to="/">Footer link 1</Link>
      <Link to="/">Footer link 2</Link>
      <Link to="/">Footer link 3</Link>
    </footer>
  );
};

export default Footer;
