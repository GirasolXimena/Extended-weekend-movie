const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {

    console.log('GETting All Genres');
    const queryText = `SELECT * FROM genres;`;
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log('error getting genres', err)
            res.sendStatus(500)
        });
});

router.post('/', function (req, res) {
    console.log('in genre POST');
    console.log(req.body.genre);
    const newGenre = req.body.genre;

    const queryText =
        `INSERT INTO genres ("genre") 
            VALUES ($1)`;
    pool.query(queryText, [newGenre])
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('error', err);

        })
});

router.delete('/:id', function (req, res) {
    console.log('DELETE genre', req.params.id);
    genreId = req.params.id;
    pool.query(`
    DELETE FROM "genres" 
    WHERE "id" = $1;`, [genreId])
        .then((result) => {res.sendStatus(200)})
        .catch((err) => {
            console.log('error deleting', err);
            res.sendStatus(500);
        })
});

module.exports = router;