app.controller('HomeController', function(ViewService){
    let self = this;
    self.getAllMovies = function () {
        ViewService.getMovies();
        self.movies = ViewService.allMovies;
        console.log('self.movies', self.movies);
        
    }
})