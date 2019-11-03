import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

import s from './global-styles.css';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className={s.app}>
      <h1>Hello</h1>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
