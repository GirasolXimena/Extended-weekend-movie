app.controller('HomeController', function(ViewService){
    let self = this;
    self.getAllMovies = function () {
        ViewService.getMovies();
        self.movies = ViewService.allMoviesApi;
    }
})