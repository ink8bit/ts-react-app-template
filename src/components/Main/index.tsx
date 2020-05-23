import type { ReactElement } from 'react';

import React from 'react';

import s from './styles.css';

function Main(): ReactElement {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Main content</h1>
    </main>
  );
}

export default Main;
