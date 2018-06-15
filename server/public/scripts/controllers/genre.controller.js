app.controller('GenreController', function(GenreService){
    let self = this;
    console.log('genre controller');
    self.allMovies = [];
    self.genreList = [];
    
    self.addMovie = function (newMovie) {
        console.log('adding movie', self.newMovie);
        GenreService.postMovie(self.newMovie);
    }

    self.getGenres = function () {   
        GenreService.getGenres().then(function () {
        self.genreList = GenreService.allGenres;
        console.log('got genres', self.genreList);
        
    });
}
    self.addGenre = function(newGenre) {
        console.log('adding genre', self.newGenre);
        GenreService.postGenre(self.newGenre).then(
            function(){
            self.getGenres();
        })
        
    }

    self.deleteGenre = function(genreToDelete) {
        console.log('deleting genre', self.genreToDelete.genre);
        genreToDelete = self.genreToDelete
        console.log('genre to delete pt2', genreToDelete);
        
        GenreService.deleteGenre(genreToDelete).then(function (){
            self.getGenres();
        });
    }

    
    self.getGenres();
})