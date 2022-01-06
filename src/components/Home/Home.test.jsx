import React from 'react';
import { create } from 'react-test-renderer';

import Home from './index';

test('snapshot', () => {
  const c = create(<Home />);
  expect(c.toJSON()).toMatchSnapshot();
});
