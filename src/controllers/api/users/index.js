import express from 'express';

var router = express.Router();

var users = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  { id: 3, name: 'User3' }
];


router.get('/', (req, res, next) => {
  res.send(users);
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;

  if (id > 0 && id <= users.length) {
    let user = users[id - 1];
    res.send(user);
  } else {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});


export default router;
