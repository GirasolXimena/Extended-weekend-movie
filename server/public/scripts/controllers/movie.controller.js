app.controller('MovieController', function(ViewService){
    let self = this;
    console.log('Movie controller');
    self.movies = [];

    ViewService.getMovies().then(function () {
        self.movies = ViewService.allMovies;
        console.log('got movies', self.movies);
        
    });
})