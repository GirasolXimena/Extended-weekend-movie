app.controller('GenreController', function (GenreService, $mdDialog, ViewService) {
    let self = this;
    console.log('genre controller');
    self.allMovies = [];
    self.genreList = [];
    self.editableGenreNames = [];

    
    self.addMovie = function (newMovie) {
        console.log('adding movie', self.newMovie);
        GenreService.postMovie(self.newMovie);
        ViewService.getMovies().then(function(){
            allMovies = ViewService.allMovies;
            genre = self.newMovie.genre;
            genreInfo = {allMovies, genre};
            GenreService.putGenre(genreInfo);
            $mdDialog.cancel({
                // templateUrl: 'views/addview.html',
                // controller: 'GenreController as vm',
                // parent: angular.element(document.body),
                // targetEvent: ev,
                // clickOUtsideToCLose: true,
                // fullscreen: self.customFullscreen
            });
        })
    }

    self.getGenres = function () {
        GenreService.getGenres().then(function () {
            self.genreList = GenreService.allGenres;
            for (let i=0; i<self.genreList.length; i++) {
                genreId = self.genreList[i].id;
                genreName = self.genreList[i].genre;
                self.editableGenreNames.push({genreId, genreName});
            }
            
            console.log('got genres', self.genreList);

        });
    }
    self.addGenre = function (newGenre) {
        console.log('adding genre', newGenre);
        newGenre = self.newGenre;
        GenreService.postGenre(newGenre).then(
            function () {
                self.getGenres();
                self.cancelAddDialog();
                $mdDialog.cancel({
                    // templateUrl: 'views/addview.html',
                    // controller: 'GenreController as vm',
                    // parent: angular.element(document.body),
                    // targetEvent: ev,
                    // clickOUtsideToCLose: true,
                    // fullscreen: self.customFullscreen
                });
            })

    }

    self.deleteGenre = function ($chip) {

        genreToDelete = $chip;

        let delConfirm = confirm('Genre Delete cannot be undone!')
        if (delConfirm === true ) {
        GenreService.deleteGenre(genreToDelete).then(function () {
            self.getGenres();
        
        })}
        else if (delConfirm === false) {
            console.log('cancelled deleting');
            
        };
    }

    self.showAddDialog = function (ev) {
        $mdDialog.show({
            templateUrl: 'views/addview.html',
            controller: 'GenreController as vm',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToCLose: true,

        })
    }

    self.cancelAddDialog = function (ev) {
        $mdDialog.cancel({

        })
    }
    self.showGenreDialog = function (ev) {

        editableGenreNames = self.editableGenreNames;
 
        
        $mdDialog.show({
            templateUrl: 'views/addgenre.html',
            controller: 'GenreController as vm',
            // parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToCLose: true,
            // fullscreen: self.customFullscreen
        })
    };

    self.getGenres();
})