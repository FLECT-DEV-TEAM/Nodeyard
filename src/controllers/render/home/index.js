import express from 'express';

var router = express.Router();


router.get('/', (req, res, next) => {
  res.render('home', { title: 'Nodeyard' });
});


export default router;
