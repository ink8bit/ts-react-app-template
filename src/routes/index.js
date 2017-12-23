// @flow

import express from 'express';

const router = express.Router();

router.get('/', (req: express$Request, res: express$Response) => {
  // res.send('ok');
  res.render('index');
});

router.get('/reverse/:word', (req: express$Request, res: express$Response) => {
  const params = req.params.word;
  const reverseString = [...params].reverse().join('');

  res.send(reverseString);
});

export default router;
