import express from 'express';

/* eslint-disable */
const router = express.Router();


router.get('/', (req, res) => {
  res.render('home');
});


export default router;
