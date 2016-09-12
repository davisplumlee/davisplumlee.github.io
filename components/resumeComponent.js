;(function(){

    angular.module('LandingPage')
        .component('resumeComponent', {
            templateUrl: 'templates/resumeView.html',
            controller: ResumeController
        })

    ResumeController.$injects = ['$state']

    function ResumeController($state){



    }

}());