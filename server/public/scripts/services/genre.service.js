app.service('GenreService', function($http){
    let self=this;

    self.getGenres = function () {
            return $http({
                method: 'GET',
                url: '/genre'
            }).then(function(response) {
                console.log('Response for GET', response);
                self.allGenres = response.data;
                console.log(response.data);
                
            }).catch(function(error) {
                console.log('GET error', error);
                
            });
        };
    self.postMovie = function (newMovie) {
        console.log('logging Movietosend', newMovie);
        return $http({
            method: 'POST',
            url: '/movie',
            data: newMovie
        }).then(function(response) {
            console.log('Response for POST', response);
            self.allMovies = response.data;
        }).catch(function(error) {
            console.log('error posting', error);
            
        })
    };

    self.postGenre = function (newGenre) {
        console.log('logging genre to send', newGenre);
        return $http({
            method: 'POST',
            url: '/genre',
            data: newGenre
        }).then(function(response) {
            console.log('Response for POST', response);
            self.allGenres = response.data;
        }).catch(function(error) {
            console.log('error posting', error);
            
        })
    };

    self.deleteGenre = function (genreToDelete) {
        console.log('delete genre service', genreToDelete);
        console.log('final one', genreToDelete.genre);
        
        return $http({
            method: 'DELETE',
            url: `/genre/${genreToDelete.genre}`
        }).then (function(response) {
            console.log('Deleted genre', response);
            
        }).catch(function(error) {
            console.log('error deleting', error);
            
        })
    }
})