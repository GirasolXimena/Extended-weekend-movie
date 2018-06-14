app.service('ViewService', function($http){
    let self=this;
    self.allMovies = [];

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