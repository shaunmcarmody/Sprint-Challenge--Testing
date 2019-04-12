const router = require('express').Router();

const games = [];

router.post('/', (req, res) => {
  if (req.body && req.body.title && req.body.genre) {
    res.status(201).json({ message: 'Game added' });
    games.push(req.body);
  } else {
    res.status(422).json({ message: 'Title and Genre are required' });
  }
});

router.get('/', (req, res) => {
  res.status(200).json(games);
});

module.exports = router;