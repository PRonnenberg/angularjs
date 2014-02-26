'use strict';

/* Controllers */

angular.module('myApp.projectView', ['ngRoute'])
   .controller('projectViewCtrl', ['$rootScope', '$scope', 'syncData', 'FBURL', '$firebase', function($rootScope, $scope, syncData, FBURL, $firebase) {
      
    $scope.newProjects = syncData('newProjects', 10);

    /*$scope.newProjects.$on('loaded', function(value) {
      if( value === null ) { console.log('no record at this path'); }
      console.log("Data loaded: ");
        console.log(value); // data loaded from Firebase
    });*/

    $scope.mainCategories = $rootScope.mainCategories;

    //$scope.getTitles = new Firebase("https://iota2014.firebaseio.com/newProjects");
    //$scope.projects2 = $firebase(new Firebase("https://iota2014.firebaseio.com/newProjects"));


    $scope.friends = [{name:'John', phone:'555-1276'},
                           {name:'Mary', phone:'800-BIG-MARY'},
                           {name:'Mike', phone:'555-4321'},
                           {name:'Adam', phone:'555-5678'},
                           {name:'Julie', phone:'555-8765'},
                           {name:'Juliette', phone:'555-5678'}];





}])