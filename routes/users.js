const fs = require('fs');
const router = require('express').Router();
const path = require('path');

const filepath = path.join(__dirname, '../data/users.json');
router.get('/', (req, res) => {
  const reader = fs.createReadStream(filepath, { encoding: 'utf8' });
  reader.on('data', (data) => {
    res.send(data);
  });
  reader.on('error', () => {
    res.send({ message: 'Запрашиваемый ресурс не найден' });
  });
});
router.get('/:id', (req, res) => {
  const reader = fs.createReadStream(filepath, { encoding: 'utf8' });
  reader.on('data', (data) => {
    let user;
    JSON.parse(data).forEach((item) => {
      if (item._id === req.params.id) {
        user = item;
      }
    });
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    } else {
      res.status(200).send(JSON.stringify(user));
    }
  });
  reader.on('error', () => {
    res.send({ message: 'Запрашиваемый ресурс не найден' });
  });
});
module.exports = router;
