'use strict';
// const app = angular.module('movies', []);
angular.module('movies', []);

// angular.module('movies')
// 	.controller('TitleCtrl', ($scope) =>{
// 		$scope.title = 'Movie History'
// 	})

// 	.controller('SearchAPICtrl', ($scope, $http) => {
// 		$scope.getAPIMovies = function() {
// 			//concats user input with API's title-search URL
// 			$http.get('http://www.omdbapi.com/?t=' + $scope.movies)
// 				.then(function(response) { //waits for a response call from the API
// 					$scope.movies = response.data; //sets movies <article> to response data
// 				});
// 		};
// 	})

// 	.controller('FavCtrl', ($scope, $http) => {
// 		$http.get('https://movies-whit.firebaseio.com/movies.json')
// 			.then((response) => {
// 				console.log(response);
// 		    $scope.favMovies = response.data;
// 		    console.log($scope.favMovies);
// 			});
// 	});

