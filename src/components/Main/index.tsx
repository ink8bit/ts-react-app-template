import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from '../Home';
import About from '../About';
import s from './styles.css';

function Main(): ReactElement {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  );
}

export default Main;
