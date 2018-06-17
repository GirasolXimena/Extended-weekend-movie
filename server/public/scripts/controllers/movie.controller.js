app.controller('MovieController', function (ViewService, GenreService) {
    let self = this;
    console.log('Movie controller');
    self.movies = [];
    self.genreList = [];
    self.movieData = [];
    apiMovies = [];
    self.getAllMovies = function () {
        ViewService.getMovies().then(function () {
            self.movies = ViewService.allMovies;
            console.log('got movies', self.movies);
            movies = self.movies;
            console.log('movies array', movies);
            movies.forEach(movie => {
                apiMovies.push({
                    searchTitle: movie.title.split(" ").join("+"),
                    searchYear: movie.ryear,
                    searchType: movie.mtype
                });

            })


        }).then(function () {
            self.movies = ViewService.getApiMovies(apiMovies);
                console.log('movie with api data', self.movies);               
            })
    };

    self.deleteMovie = function (movie) {
        console.log('delete');
        console.log(movie);
        ViewService.deleteMovies(movie).then(function () {
            self.getAllMovies();
        });

    };
});