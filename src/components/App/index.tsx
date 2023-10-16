import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import './reset.css';
import s from './styles.css';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const node = document.getElementById('root');
const root = node && createRoot(node);

if (!root) {
  throw new Error('root is undefined');
}

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
