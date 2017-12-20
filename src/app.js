// @flow

import express from 'express';

const app = express();

app.get('/', (req: express$Request, res: express$Response) => {
  res.send('ok');
});

export default app;
