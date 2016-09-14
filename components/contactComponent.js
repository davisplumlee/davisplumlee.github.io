;(function(){

    angular.module('LandingPage')
        .component('contactComponent',{
            templateUrl: 'templates/contactView.html',
            controller: ContactController
        })

    ContactController.$injects = ['$state'];
    
    function ContactController($state){



    }

}());