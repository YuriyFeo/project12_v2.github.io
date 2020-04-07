const router = require('express').Router();
const fsPromises = require('fs').promises;

router.get('/', (req, res) => {
    fsPromises.readFile('./data/cards.json')
        .then((data) => {
            res.status(200).send(JSON.parse(data));
        })
        .catch(() => {
            res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
        });
});

module.exports = router;