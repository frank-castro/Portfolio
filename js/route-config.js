angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home/index.html',
			})
			.when('/current', {
				templateUrl: 'templates/current/index.html',
				controller: 'CtrlrCurrent',
				controllerAs: 'current'
			})
			.when('/past', { 
				templateUrl: 'templates/past/index.html',
				controller: 'CtrlrWork',
				controllerAs: 'work'
			})
			.when('/pastprint', { 
				templateUrl: 'templates/print/index.html',
				controller: 'CtrlrPrint',
				controllerAs: 'print'
			})
			.when('/code', { 
				templateUrl: 'templates/code/index.html'
			})
			.when('/approach', { 
				templateUrl: 'templates/approach/index.html'
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);