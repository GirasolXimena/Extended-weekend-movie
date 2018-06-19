const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {
   
    const queryText = `
    SELECT * FROM movies`;
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
   
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
         
            res.sendStatus(500);
        })
});

router.post('/', function (req, res) {
    console.log('in movie POST');
    console.log(req.body.server.title, req.body.api.Title);
    const newMovie = req.body; 

    const queryText = 
    `INSERT INTO movies ("title", "mtype", "ryear", "apidata") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newMovie.api.Title, newMovie.server.mtype, newMovie.server.ryear, newMovie.api])
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            console.log('error', err);  
        })
});

router.put('/', function (req,res) {
    console.log('in movie PUT');
    console.log(req.body);
    const newApi = req.body
    const queryText = 
    `UPDATE "movies" 
     SET "apidata" = $1 
     WHERE "id" = $2`;
     pool.query(queryText, [newApi.apiData, newApi.ApiId])
    
})
module.exports = router;