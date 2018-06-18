app.controller('MovieController', function (ViewService, $mdDialog ) {
    let self = this;
    console.log('Movie controller');
    self.movies = [];
    self.genreList = [];
    apiMovies = [];
   
    self.getAllMovies = function () {
        ViewService.getMovies();
        self.movies = ViewService.allMoviesApi;
        self.moviedId = ViewService.allMoviesApiId;
        console.log(self.moviedId);
    };

    self.soloMovie = function () {
        console.log(expMovie);
        self.expMovie = expMovie;
        
    };

    self.closeMovie = function() {
        $mdDialog.cancel({
        });
    }

    self.deleteMovie = function (id) {
        console.log('delete');
        console.log(id);
        // ViewService.deleteMovies(movie).then(function () {
        //     self.getAllMovies();
        // });

    };

    self.expandMovie = function(movie) {
        expMovie = movie;
        $mdDialog.show({
            templateUrl: 'views/expandedmovie.html',
            controller: 'MovieController as vm',
            parent: angular.element(document.body),
            targetEvent: movie,
            clickOutsideToCLose: true,

        });
            console.log(expMovie);
            return expMovie    
    }
    
});