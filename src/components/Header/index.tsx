import React from 'react';

import { Link } from '@reach/router';

const Header: React.FunctionComponent<{}> = () => {
  return (
    <header>
      <Link to="/">Link</Link>
    </header>
  );
};

export default Header;
