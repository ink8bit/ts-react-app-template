import React from 'react';
import { create } from 'react-test-renderer';

import About from './index';

test('snapshot', () => {
  const c = create(<About />);
  expect(c.toJSON()).toMatchSnapshot();
});
