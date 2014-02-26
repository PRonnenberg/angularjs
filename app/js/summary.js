'use strict';

/* Controllers */

angular.module('myApp.summary', ['ngRoute'])
   .controller('summaryCtrl', ['$rootScope', '$scope', 'syncData', 'FBURL', '$firebase', function($rootScope, $scope, syncData, FBURL, $firebase) {

   	//syncData('categories').$bind($scope, 'categories');
   	//syncData('detailCategories').$bind($scope, 'detailCategories');
   	//syncData('detailCategories2').$bind($scope, 'detailCategories2');
    syncData('title').$bind($scope, 'title');
    syncData('description').$bind($scope, 'description');
    //syncData('projects').$bind($scope, 'projects2');

    $scope.projects = syncData('projects', 10);

    $scope.mainCategories = $rootScope.mainCategories;
    $scope.detailCategories = $rootScope.detailCategories;
    $scope.detailCategories2 = $rootScope.detailCategories2;

    $scope.explanation = $rootScope.explanation;
    $scope.description = $rootScope.explanation;

    $scope.title = '';

    $scope.checkQuestions = function() {
        if ($scope.title.length != 0) { // your question said "more than one element"
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkQuestions2 = function() {
        if ($scope.title.length != 0) { // your question said "more than one element"
        return true;
      }
        else {
          return false;
        }
      };

    //$scope.allProjects = $firebase (new Firebase("https://iota2014.firebaseio.com/projects"));

    /*$scope.projects.$on('loaded', function(value) {
    	if( value === null ) { console.log('no record at this path'); }
    	console.log("Data loaded: ");
      	console.log(value); // data loaded from Firebase
    });*/

    $scope.save = function() {
        $scope.description = $rootScope.explanation;
         //$scope.allProjects = $firebase (new Firebase(FBURL));
         //$scope.allProjects = syncData('projects', 10);
         //console.log(projects.length);
         //console.log(projects.mainCats);

         // create new collection with all given inputs

         /*
         $scope.newProjects = syncData('newProjects', 10);
         //$scope.newProjects = $firebase (new Firebase(FBURL));
         for (var i = 0; i < $scope.mainCategories.length; i++) {
          $scope.newProjects.$add( {mainCats: $scope.mainCategories[i]} );
            console.log($scope.mainCategories[i]);
         };
         $scope.newProjects.$add({ description: $scope.description, title: $scope.title });
         */

         //$scope.newProjects = syncData('newProjects', 10);
         //$scope.newProjects = $firebase (new Firebase(FBURL));
         //$scope.newProjects.$add({ description: $scope.description, title: $scope.title });

         /*for (var i = 0; i < $scope.mainCategories.length; i++) {
          $scope.newProjects.$add( {mainCats: $scope.mainCategories[i]} );
            console.log($scope.mainCategories[i]);
         };*/
         $scope.newProjects = syncData('newProjects', 100);
         $scope.newProjects.$add({mainCats: $scope.mainCategories, detailCats: $scope.detailCategories, detailCats2: $scope.detailCategories2, description: $scope.description, title: $scope.title });
         $scope.description = '';
         $scope.title = '';

         // delete temporary data
         $scope.projects.$remove();

         //console.log($scope.people.length);

         //$scope.projects.$add( {last: true} );
         //$scope.allProjects.$add({categories: $scope.selection.finalValue});

         /*for (var i = 0; i < $scope.allProjects.project.length; i++) {
          	$scope.categories.$add( {mainCats: $scope.selection.finalValue[i]} );
           console.log($scope.allProjects.project[i]);
         };*/
         window.location.href='#/projectView';
      };

    //$scope.detailCategories = syncData('detailCategories', 10);
    //$scope.detailCategories2 = syncData('detailCategories2', 10);

    
    /*$scope.mainCats = $scope.categories.mainCats;
    $scope.mainCatsArray = [];
    $scope.mainCatsArray.push( $scope.mainCats );*/

   }])