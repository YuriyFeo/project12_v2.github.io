const fs = require('fs');
const router = require('express').Router();
const path = require('path');

const filepath = path.join(__dirname, '../data/cards.json');
router.get('/', (req, res) => {
  const reader = fs.createReadStream(filepath, { encoding: 'utf8' });
  reader.on('data', (data) => {
    res.send(data);
  });
  reader.on('error', () => {
    res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
  });
});

module.exports = router;
