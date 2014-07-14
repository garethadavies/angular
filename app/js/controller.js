angular.module('moviesApp', ['ngResource']);

function moviesCtr($scope, $resource) {

	// https://api.themoviedb.org/3/search/movie
    $scope.movies = $resource('https://api.themoviedb.org/3/:action/movie',
        {
        	action: 'search',
        	query: 'Departed',
        	api_key: '42ed6725436bf680773a630428d7d229',
        	callback: 'JSON_CALLBACK'
        },
        {
        	get: {
        		method: 'JSONP'
        	}
        }
	);

    $scope.doSearch = function() {

    	if ($scope.searchTerm) {

	        $scope.moviesResult = $scope.movies.get({
	        	query: $scope.searchTerm
	        });

	    }
    
    };

}