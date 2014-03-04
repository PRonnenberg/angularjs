'use strict';

/* Controllers */

angular.module('myApp.projectsDetail', ['ngRoute', 'ngResource'])
   .controller('projectsDetailCtrl', ['$rootScope', '$scope', 'syncData', 'FBURL', '$firebase', 'Phone', '$routeParams', function($rootScope, $scope, syncData, FBURL, $firebase, Phone, $routeParams) {
    

    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
      console.log($scope.mainImageUrl);
      console.log('mainImageURL: '+$scope.mainImageUrl);
    }


    $scope.showElements = function() {
         //window.location.href='#/detailCat';
         console.log('Phones: ' + $scope.phones);
      };
	


}])