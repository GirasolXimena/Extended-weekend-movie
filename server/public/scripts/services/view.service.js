app.service('ViewService', function ($http) {
    let self = this;
    self.allMovies = [];
    self.allMoviesApi = [];

    self.getMovies = function () {
        return $http({
                method: 'GET',
                url: '/movie'
            }).then(function (response) {
                console.log('Response for GET', response);
                self.allMovies = response.data;
                self.getApi(self.allMovies);
            })
            .catch(function (error) {
                console.log('GET error', error);
            });
    };

    self.getApi = function() {
     
        self.allMoviesApi =[];
        for (movie of self.allMovies) {
              $http({
                method: 'GET',
                url: `http://www.omdbapi.com/?apikey=41208ca&t=${movie.title}&y=${movie.ryear}`
            }).then(function(response) {
                self.allMoviesApi.push(response.data);
            })
        }
        console.log('apidata', self.allMoviesApi);
    }

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