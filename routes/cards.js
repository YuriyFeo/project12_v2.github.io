const router = require('express').Router();
const path = require('path');

const filepath = path.join(__dirname, '../data/cards.json');
const cardsData = require(filepath);
router.get('/', (req, res) => {
  res.send(cardsData);
});

module.exports = router;
