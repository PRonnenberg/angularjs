'use strict';

/* Controllers */

angular.module('myApp.projects', ['ngRoute', 'ngResource'])
   .controller('projectsCtrl', ['$rootScope', '$scope', 'syncData', 'FBURL', '$firebase', 'Phone', function($rootScope, $scope, syncData, FBURL, $firebase, Phone) {
    
    $scope.phones = Phone.query();

    //$scope.orderProp = 'age';

    $scope.showElements = function() {
         //window.location.href='#/detailCat';
         console.log('Phones: ' + $scope.phones);
      };

}])