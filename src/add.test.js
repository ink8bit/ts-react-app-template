import add from './add';

test('add', () => {
  const want = 5;
  const got = add(2, 3);

  expect(got).toBe(want);
});
