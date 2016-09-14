;(function(){

    angular.module('LandingPage', ['ui.router'])

        .config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				component: 'homeComponent'
			})
            .state('about', {
				url: '/about',
				component: 'resumeComponent'
			})
			.state('contact', {
				url: '/contact',
				component: 'contactComponent'
			})
			.state('search', {
				url: '/search/:query',
				component: 'search'
			})
	});

}());