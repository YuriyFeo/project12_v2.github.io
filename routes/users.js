const router = require('express').Router();
const fsPromises = require('fs').promises;

router.get('/', (req, res) => {
    fsPromises.readFile('./data/users.json')
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(() => {
            res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
        });
});
router.get('/:id', (req, res) => {
    fsPromises.readFile('./data/users.json', { encoding: 'utf8' })
        .then((data) => {
            const users = JSON.parse(data);
            let user;
            users.forEach((item) => {
                if (item._id === req.params.id) {
                    user = item;
                }
            });
            if (!user) {
                res.status(404).send({ message: 'Нет пользователя с таким id' });
            } else res.status(200).send(user);
        })
        .catch(() => {
            res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
        });
});
module.exports = router;