app.service('ViewService', function ($http) {
    let self = this;
    self.allMovies = [];
    self.allMoviesApi = {
    };
    self.allMoviesApiId = [];
    self.getMovies = function () {
        return $http({
                method: 'GET',
                url: '/movie'
            }).then(function (response) {
                console.log('Response for GET movies', response);
                self.allMovies = [];
                self.movieArray = response.data;
                for (movie of self.movieArray) {
                    apiData = JSON.parse(movie.apidata);
                    movieId = movie.id;
                    movieObject = {
                        api: apiData,
                        id: movieId
                    }
                    self.allMovies.push(movieObject);
                }
                console.log(self.allMovies);
                
            })
            .catch(function (error) {
                console.log('GET error', error);
            });
    };


    self.deleteMovies = function (movie) {

        return $http({
            method: 'DELETE',
            url: `/movie/${movie.id}`
        }).then(function (response) {
            console.log('Deleted movie', response);

        }).catch(function (error) {
            console.log('error deleting', error);

        })
    }


})