"use strict";

angular.module('myApp.routes', [

   'ngRoute',
   'myApp.services'
   ])
   
   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/inputForm', {
         templateUrl: 'partials/inputForm.html',
         controller: 'inputFormCtrl'
      });

      $routeProvider.when('/home', {
         templateUrl: 'partials/home.html',
         controller: 'HomeCtrl'
      });

      $routeProvider.when('/chat', {
         templateUrl: 'partials/chat.html',
         controller: 'ChatCtrl'
      });

      $routeProvider.when('/mainCat', {
         templateUrl: 'partials/mainCat.html',
         controller: 'mainCatCtrl'
      });

      $routeProvider.when('/detailCat', {
         templateUrl: 'partials/detailCat.html',
         controller: 'detailCatCtrl'
      });

      $routeProvider.when('/detailCat2', {
         templateUrl: 'partials/detailCat2.html',
         controller: 'detailCat2Ctrl'
      });

      $routeProvider.when('/explanation', {
         templateUrl: 'partials/explanation.html',
         controller: 'explanationCtrl'
      });

      $routeProvider.when('/summary', {
         templateUrl: 'partials/summary.html',
         controller: 'summaryCtrl'
      });

      $routeProvider.when('/projectView', {
         templateUrl: 'partials/projectView.html',
         controller: 'projectViewCtrl'
      });

      $routeProvider.when('/projects', {
         templateUrl: 'partials/projects.html',
         controller: 'projectsCtrl'
      });

      $routeProvider.when('/phones/:phoneId', {
        templateUrl: 'partials/projectsDetail.html',
        controller: 'projectsDetailCtrl'
      });

      $routeProvider.when('/account', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/account.html',
         controller: 'AccountCtrl'
      });

      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'LoginCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/inputForm'});
   }]);