;(function(){

    angular.module('LandingPage')
        .component('workComponent', {
            templateUrl: 'templates/workView.html',
            controller: WorkController
        })

    WorkController.$injects = ['$state']

    function WorkController($state){



    }

}());