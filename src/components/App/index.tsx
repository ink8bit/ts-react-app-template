import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
