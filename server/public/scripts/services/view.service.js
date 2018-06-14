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
})