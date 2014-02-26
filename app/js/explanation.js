'use strict';

/* Controllers */

angular.module('myApp.explanation', ['ngRoute'])
   .controller('explanationCtrl', ['$scope', '$rootScope', 'syncData', function($scope, $rootScope, syncData) {
   	syncData('description').$bind($scope, 'description');

   	$scope.checkQuestions = function() {
        if ($scope.result.length != 0) { // your question said "more than one element"
        return false;
      }
        else {
          return true;
        }
      };

   	$scope.save = function() {
   		$rootScope.explanation = $scope.result;

   		$scope.description = '';
   		$scope.description = $scope.result;

         //console.log($scope.result);
         //console.log('root scope: ');
         //console.log($rootScope.explanation);

         window.location.href='#/summary';
      };

      $rootScope.explanation = '';


   }])


   .directive('myMaxlength', function() {
  		return {
    		require: 'ngModel',
    		scope: { result: "=ngModel" },
    		link: function (scope, element, attrs, ngModelCtrl) {
      			var maxlength = Number(attrs.myMaxlength);
      			function fromUser(text) {
          			ngModelCtrl.$setValidity('unique', text.length <= maxlength);
          			//console.log(text);
          			//description = text;
          			//template: text;
          			//'{{customer.name}}' : text;

          		return text;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }; 
});