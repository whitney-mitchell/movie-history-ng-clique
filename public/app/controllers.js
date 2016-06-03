angular.module('movies')
	.controller('TitleCtrl', ($scope) =>{
		$scope.title = 'Movie History'
	})

	.controller('SearchAPICtrl', ($scope, $http) => {
		$scope.getAPIMovies = function() {
			//concats user input with API's title-search URL
			$http.get('http://www.omdbapi.com/?t=' + $scope.APImovies)
				.then((response) => { //waits for a response call from the API
					$scope.APImovies = response.data; //sets movies <article> to response data
				});
		}
		//show/hide API Search input
		$scope.showInput = false;
		$scope.searchAPIInput = function() {
			$scope.showInput = true;
		}
		//show/hide API Search results
		$scope.showSearchResults = false;
		$scope.searchSubmit = function() {
			$scope.showSearchResults = true;
		}

		$scope.saveMovie = function() {
			$http.post('https://movies-whit.firebaseio.com/.json', {
	      Title: $scope.APImovies.Title,
	      Year: $scope.APImovies.Year,
	      // actors: $scope.APImovies.Actors,
	      Rating: $scope.rateData.rateSelect,
	      Watched: $scope.watchData.watched

    	}).then(function() {
      	window.location.reload()
    	});

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

	.controller('ShowFavCtrl', ($scope, $http) => {
		$http.get('https://movies-whit.firebaseio.com/.json')
			.then((response) => {
				$scope.movieArray = [];
		    $scope.favMovies = response.data;
		    for (let eachMovie in $scope.favMovies) {
		    	$scope.movieArray.push($scope.favMovies[eachMovie])
				};
			});
		//hide and show extra info about fav. movies
		$scope.getMoreInfo = function(movie) {
			movie.showMoreInfo = !movie.showMoreInfo;
		}
		// $scope.

	});
