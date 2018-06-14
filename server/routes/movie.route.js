const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {
    console.log('GETting All Movies');
    const queryText = `SELECT * FROM movies;`;
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log('error getting movies', err)
            res.sendStatus(500)
        });
});

router.delete('/:id', function (req, res) {
    console.log('DELETE Movie', req.params.id);
    movieId = req.params.id;
    pool.query(`
    DELETE FROM "movies" 
    WHERE "id" = $1;`, [movieId])
        .then((result) => {res.sendStatus(200)})
        .catch((err) => {
            console.log('error deleting', err);
            res.sendStatus(500);
        })
})

module.exports = router;