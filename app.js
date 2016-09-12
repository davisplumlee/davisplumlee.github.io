;(function(){

    angular.module('LandingPage', ['ui.router'])

        .config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				component: 'homeComponent'
			})
            .state('resume', {
				url: '/resume',
				component: 'resumeComponent'
			})
			.state('search', {
				url: '/search/:query',
				component: 'search'
			})
	});

}());