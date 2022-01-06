import type { ReactElement } from 'react';

import React from 'react';

import s from './styles.css';

function Main(): ReactElement {
  return (
    <>
      <h1 className={s.title}>About</h1>
      <div>content</div>
    </>
  );
}

export default Main;
