import React from 'react';
import { create } from 'react-test-renderer';

import Main from '../index';

test('snapshot', () => {
  const c = create(<Main />);
  expect(c.toJSON()).toMatchSnapshot();
});
