app.service('ViewService', function($http){
    let self=this;
    self.allMovies = [];
    self.allMoviesApi = [];
    
    self.getMovies = function () {
        return $http({
            method: 'GET',
            url: '/movie'
        }).then(function(response) {
            console.log('Response for GET', response);
            self.allMovies = response.data;
            console.log(response.data);
            
        }).catch(function(error) {
            console.log('GET error', error);
            
        });
    }

    self.getApiMovies = function (apiMovies) {
        console.log(apiMovies);
        
        for (movie of apiMovies) {
            console.log(movie.searchTitle);
            console.log(movie.searchYear);
           $http({
               method: 'GET',
               url: `http://www.omdbapi.com/?apikey=41208ca&t=${movie.searchTitle}&y=${movie.searchYear}`
           }).then(function(response) {
            console.log('Response for GET', response);
            self.allMoviesApi.push(response.data);
            console.log(response.data);
            
        }).catch(function(error) {
            console.log('GET error', error);
            
        });
            
        }
        console.log(self.allMoviesApi);
        return self.allMoviesApi;
        
    }

    self.deleteMovies = function(movie) {
        console.log('id to delete in service', movie.id );
        
        return $http({
            method: 'DELETE',
            url: `/movie/${movie.id}`
        }).then (function(response) {
            console.log('Deleted movie', response);
            
        }).catch(function(error) {
            console.log('error deleting', error);
            
        })
    }
})