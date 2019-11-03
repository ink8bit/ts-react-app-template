import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <h1>Hello</h1>
      <Header />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
