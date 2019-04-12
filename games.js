const router = require('express').Router();

router.post('/', (req, res) => {
  res.status(200).json({ message: works })
});

router.get('/', (req, res) => {

});

module.exports = router;