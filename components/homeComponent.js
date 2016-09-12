;(function(){

    angular.module('LandingPage')
        .component('homeComponent', {
            templateUrl: 'templates/homeView.html',
            controller: HomeController
        })

    HomeController.$injects = ['$state']

    function HomeController($state){



    }

}());