import React from 'react';
import { create } from 'react-test-renderer';

import Header from '../index';

test('snapshot', () => {
  const c = create(<Header />);
  expect(c.toJSON()).toMatchSnapshot();
});
