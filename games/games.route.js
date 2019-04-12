const router = require('express').Router();

const games = [];

const required = (req, res, next) => {
  if (req.body && req.body.title && req.body.genre) {
    next();
  } else {
    res.status(422).json({ message: 'Title and Genre are required' });
  }
}

router.post('/', required, (req, res) => {
  games.push({ id: games.length, ...req.body });
  res.status(201).json({ message: 'Game added' });
});

router.get('/', (req, res) => {
  res.status(200).json(games);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const game = games[id];
  if (game) {
    res.status(200).json(games[id]);
  } else {
    res.status(404).json({ message: 'No Game Found' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const game = games[id];
  if (game) {
    games.splice(game, 1);
    res.status(202).json(games);
  } else {
    res.status(404).json({ message: 'No Game Found' });
  }
});

module.exports = router;