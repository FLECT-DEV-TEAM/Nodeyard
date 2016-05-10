import express from 'express';
import HttpErrors from 'http-errors';

import { greet } from '../../../lib/greeting';

/* eslint-disable */
const router = express.Router();


router.get('/', (req, res, next) => {
  const name = req.query.name;

  if (name) {
    res.send({
      greetingMessage: greet(name)
    });
  } else {
    const err = HttpErrors(400, 'Bad Request');
    next(err);
  }
});


export default router;
