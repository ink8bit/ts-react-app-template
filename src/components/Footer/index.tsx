import type { ReactElement } from 'react';

import React from 'react';
import { Link } from 'react-router-dom';

import s from './styles.css';

function Footer(): ReactElement {
  return (
    <footer className={s.footer}>
      <Link to="/about">Footer link 1</Link>
      <Link to="/about">Footer link 2</Link>
      <Link to="/about">Footer link 3</Link>
    </footer>
  );
}

export default Footer;
