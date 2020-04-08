const router = require('express').Router();
const path = require('path');

const filepath = path.join(__dirname, '../data/users.json');
const usersData = require(filepath);
router.get('/', (req, res) => {
  res.send(usersData);
});
router.get('/:id', (req, res) => {
  let user;
  usersData.forEach((item) => {
    if (item._id === req.params.id) {
      user = item;
    }
  });
  if (!user) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  } else res.status(200).send(user);
});
module.exports = router;
