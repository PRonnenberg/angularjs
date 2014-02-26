'use strict';

/* Controllers */

angular.module('myApp.detailCat2', ['ngRoute'])
   .controller('detailCat2Ctrl', ['$rootScope', '$scope', 'syncData', 'FBURL', '$firebase', function($rootScope, $scope, syncData, FBURL, $firebase) {
      
      //syncData('title').$bind($scope, 'title');
      //syncData('description').$bind($scope, 'description');

      //syncData('detailCategories2').$bind($scope, 'detailCategories2');

      $scope.newProjects = syncData('newProjects', 10);

      $scope.checkQuestions = function() {
        if ($scope.detailCats.finalValue.length != 0) { // your question said "more than one element"
        return false;
      }
        else {
          return true;
        }
      };

      $scope.todoText2 = '';

      $scope.checkQuestions2 = function() {
        if ($scope.todoText2.length != 0) { // your question said "more than one element"
        return false;
      }
        else {
          return true;
        }
      };

      $scope.addTodo = function() {
      // For new Method:
      $scope.detailCats.categories.push( $scope.todoText2 );
      $scope.detailCats.value.push( true );
      $scope.todoText2 = '';
      };

      $scope.delete = function ( idx ) {
          //New Method:
         var item_to_delete = $scope.detailCats.categories[idx];
         $scope.detailCats.categories.splice(idx, 1);
         // delete item from finalValues Array as well:
         var finalItem_to_delete = $scope.detailCats.finalValue[idx];
         $scope.detailCats.finalValue.splice(idx, 1);
         // delete item from value array:
         var value_to_delete = $scope.detailCats.value[idx];
         $scope.detailCats.value.splice(idx, 1);
      };

      /*$scope.save = function() {
         // Store / add Array to a synced value:
         $scope.detailCategories2 = syncData('detailCategories2', 10);
         $scope.detailCategories2.$add({detailCategories2: $scope.detailCats.finalValue});
      };*/

      $scope.save = function() {
         // Store / add Array to a synced value:
         /*$scope.detailCats2 = syncData('projects', 10);
         //$scope.categories.$add({mainCats: $scope.selection.finalValue});
         
         for (var i = 0; i < $scope.detailCats.finalValue.length; i++) {
          $scope.detailCats2.$add({detailCats2: $scope.detailCats.finalValue[i]});
           console.log($scope.detailCats.finalValue[i]);
         };*/
         window.location.href='#/explanation';
      };
      
      // NEW METHOD
      $scope.detailCats = {
        value: [],
        staticValue: [],
        finalValue :[],
        categories :[],
      };

      $rootScope.detailCategories2 = $scope.detailCats.finalValue;

      $scope.getPos = function(item,arr){        
        if ($scope.detailCats.finalValue.indexOf(item) == -1
           && $scope.detailCats.value[arr.indexOf(item)]==true){
            
            $scope.detailCats.finalValue.push(item)
        }
        if ($scope.detailCats.finalValue.indexOf(item) != -1
            &&  ! $scope.detailCats.value[arr.indexOf(item)] ){
            $scope.detailCats.finalValue.splice($scope.detailCats.finalValue.indexOf(item),1)
        }
        

        return arr.indexOf(item);
      }
      



}])