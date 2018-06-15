const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {
    console.log('GETting All Movies');
    const queryText = `
    SELECT title, ryear, genre FROM movies
    JOIN movie_genre ON movies.id = movie_genre.movie_id
    JOIN genres ON genres.id = movie_genre.genre_id;`;
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
});

router.post('/', function (req, res) {
    console.log('in movie POST');
    console.log(req.body);
    const newMovie = req.body; 

    const queryText = 
    `INSERT INTO movies ("title", "mtype", "ryear") 
    VALUES ($1, $2, $3)`;
    pool.query(queryText, [newMovie.title, newMovie.mtype, newMovie.ryear])
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('error', err);
          
        })
});

module.exports = router;