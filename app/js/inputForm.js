'use strict';

/* Controllers */

angular.module('myApp.inputForm', ['ngRoute'])
   .controller('inputFormCtrl', ['$rootScope', '$location', '$anchorScroll', '$scope', 'syncData', 'FBURL', '$firebase',  function($location, $anchorScroll, $rootScope, $scope, syncData, FBURL, $firebase) {
      
      // VARIABLES
      $scope.newProjects = syncData('newProjects', 10);
      syncData('title').$bind($scope, 'title');
      $scope.title = '';

      $scope.users = [
      {user: 'Christopher Milestone'},
      {user: 'Fred Turner'},
      {user: 'Sandra Smith'}];

      //CHECK STATUS TO ENABLE MODES
      $scope.status = [];

      // VARIABLES -> MAIN CATEGORIES
      $scope.todoText = '';
      $scope.todos = [];

      $scope.selection = {
        value: [],
        staticValue: [],
        finalValue :[],
        categories :[],
        staticCategories:[ "Health", "Politics" , "Environment", "Education"]
      };
      $rootScope.mainCategories = $scope.selection.finalValue;
      

      // VARIABLES -> KEYWORDS
      $scope.keyword = '';

      $scope.keywords = {
        finalValue :[],
      };

      $rootScope.keywords = $scope.keywords.finalValue;

      $scope.result = '';

      // FUNCTIONS
      $scope.checkSaveMainCat = function() {
        if ($scope.selection.finalValue.length != 0) {
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkAddOwnCat = function() {
        if ($scope.todoText.length != 0) {
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkAddKeywords = function() {
        if ($scope.keyword.length != 0) {
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkSaveKeywords = function() {
        if ($scope.keywords.finalValue.length != 0) {
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkDescription = function() {
        if ($scope.result.length != 0) {
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkTitle = function() {
        if ($scope.title != 0) {
        return false;
      }
        else {
          return true;
        }
      };
  

      $scope.addOwnCat = function() {
        $scope.selection.categories.push( $scope.todoText );
        $scope.selection.finalValue.push( $scope.todoText );
        $scope.selection.value.push( true );
        $scope.todoText = '';
      };

      $scope.addKeyword = function() {
        $scope.keywords.finalValue.push( $scope.keyword );
        $scope.keyword = '';
      };

      $scope.deleteOwnCat = function ( idx ) {
         $scope.selection.categories.splice(idx, 1);
         $scope.selection.finalValue.splice(idx, 1);
         $scope.selection.value.splice(idx, 1);
      };

      $scope.deleteKeyword = function ( idx ) {
         $scope.keywords.finalValue.splice(idx, 1);
      };


      $scope.save = function() {
         //window.location.href='#/detailCat';
         console.log('Categories: ' + $scope.selection.finalValue);
         console.log('Keywords: ' + $scope.keywords.finalValue);
         console.log('Description: ' + $scope.result);
         console.log('Title: ' + $scope.title);
      };

      $scope.nextStep = function () {
        $scope.status.push(true);
        console.log("$scope.status: ");
        console.log($scope.status);
        /*$location.hash('item' + $scope.status.length);
        $anchorScroll();*/
      };

      $scope.checkNext = function(item) {
        console.log("checkNext $scope.status: ");
        return $scope.status[item];

      };


      // GET MAIN CATEGORIES AND SORT:
      $scope.getPos2 = function(item,arr){   
        //console.log(arr.indexOf(item) +":"+item)

        if ($scope.selection.finalValue.indexOf(item) == -1
           && $scope.selection.staticValue[arr.indexOf(item)]==true){
            
            $scope.selection.finalValue.push(item)
        }
        if ($scope.selection.finalValue.indexOf(item) != -1
            &&  ! $scope.selection.staticValue[arr.indexOf(item)] ){
            //console.log($scope.selection.value[arr.indexOf(item)] + " remove:" + item +" :"+ arr.indexOf(item) )
            $scope.selection.finalValue.splice($scope.selection.finalValue.indexOf(item),1)
        }
        
        return arr.indexOf(item);

      };

}])


// CHECK FOR TEXTAREA CHARACTER LIMIT
.directive('myMaxlength', function() {
      return {
        require: 'ngModel',
        scope: { result: "=ngModel" },
        link: function (scope, element, attrs, ngModelCtrl) {
            var maxlength = Number(attrs.myMaxlength);
            function fromUser(text) {
                ngModelCtrl.$setValidity('unique', text.length <= maxlength);
              return text;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }; 
});