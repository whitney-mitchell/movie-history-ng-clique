angular.module('movies')
	.controller('TitleCtrl', ($scope) =>{
		$scope.title = 'Movie History'
	})

	.controller('SearchAPICtrl', ($scope, $http) => {
		$scope.getAPIMovies = function() {
			//concats user input with API's title-search URL
			$http.get('http://www.omdbapi.com/?t=' + $scope.movies)
				.then(function(response) { //waits for a response call from the API
					$scope.movies = response.data; //sets movies <article> to response data
				});
		}
		$scope.showInput = false;
		$scope.searchAPIInput = function() {
			$scope.showInput = true;
		}
		$scope.showSearchResults = false;
		$scope.searchSubmit = function() {
			$scope.showSearchResults = true;
		}

		$scope.rateData = {
 			rateSelect: null,
			ratings: [
				{id: '1', name: 'One Star'},
				{id: '2', name: 'Two Stars'},
 				{id: '3', name: 'Three Stars'},
				{id: '4', name: 'Four Stars'},
				{id: '5', name: 'Five Stars'}
			],
		}

		$scope.watchData = {
			watched: "No...No Seent it."

		}

	})

	.controller('FavCtrl', ($scope, $http) => {
		$http.get('https://movies-whit.firebaseio.com/movies.json')
			.then((response) => {
				console.log(response);
		    $scope.favMovies = response.data;
		    console.log($scope.favMovies);
			});
	});
