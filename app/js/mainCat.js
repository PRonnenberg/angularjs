'use strict';

/* Controllers */

angular.module('myApp.mainCat', ['ngRoute'])
   .controller('mainCatCtrl', ['$rootScope', '$scope', 'syncData', 'FBURL', '$firebase',  function($rootScope, $scope, syncData, FBURL, $firebase) {
      
      //syncData('syncedValue').$bind($scope, 'syncedValue');
      //syncData('project').$bind($scope, 'project');

      //syncData('title').$bind($scope, 'title');
      //syncData('description').$bind($scope, 'description');

      $scope.newProjects = syncData('newProjects', 10);

      $scope.todoText = '';

      $scope.checkQuestions = function() {
        if ($scope.selection.finalValue.length != 0) { // your question said "more than one element"
        return false;
      }
        else {
          return true;
        }
      };

      $scope.checkQuestions2 = function() {
        if ($scope.todoText.length != 0) { // your question said "more than one element"
        return false;
      }
        else {
          return true;
        }
      };
    
      $scope.alreadyAddedValues = function() {
        console.log($scope.selection.finalValue);
        return $scope.selection.finalValue;

      };
    
      $scope.filterAlreadyAdded = function(item) {
        return ($scope.alreadyAddedValues().indexOf(item) == -1);
      };



      $scope.outputs = {};

      $scope.todos = [
      {text:'health', done:false},
      {text:'politics', done:false},
      {text:'environment', done:false}];

      $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      //$scope.todoText = '';

      // For new Method:
      $scope.selection.categories.push( $scope.todoText );
      $scope.selection.value.push( true );
      $scope.todoText = '';
      };
 
      $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
      });
      return count;
      };
      
      $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
         if (!todo.done) $scope.todos.push(todo);
      });
      };

      $scope.delete = function ( idx ) {
         var person_to_delete = $scope.todos[idx];
         $scope.todos.splice(idx, 1);
         
         //New Method:
         var item_to_delete = $scope.selection.categories[idx];
         $scope.selection.categories.splice(idx, 1);
         // delete item from finalValues Array as well:
         var finalItem_to_delete = $scope.selection.finalValue[idx];
         $scope.selection.finalValue.splice(idx, 1);
         // delete item from value array:
         var value_to_delete = $scope.selection.value[idx];
         $scope.selection.value.splice(idx, 1);
      };

      $scope.save = function() {
         // Store / add Array to a synced value:
         /*$scope.categories = syncData('projects', 10);

         for (var i = 0; i < $scope.selection.finalValue.length; i++) {
          $scope.categories.$add( {mainCats: $scope.selection.finalValue[i]} );
            console.log($scope.selection.finalValue[i]);
         };*/
         window.location.href='#/detailCat';
      };

      $scope.add = function() {
         var count = 0;
         angular.forEach($scope.todos, function(todo) {
         });
         return count;
      };


      $scope.addTitle = function() {
         /*$scope.projects = $firebase (new Firebase(FBURL));
         $scope.projects.title = item;
         $scope.projects.$add({title: item});*/
         //$scope.title = null;
         //$scope.title = syncData('title', 10);
         //$scope.selection.finalValue.push(title);
         /*$scope.title = $firebase (new Firebase(FBURL));
         $scope.title.$add(title);
         $scope.title.$add(  );*/
         if( $scope.newMessage ) {
            $scope.messages.$add({text: $scope.newMessage});
            $scope.newMessage = null;
         }
         //console.log(syncedValue);

      };
   


      // NEW METHOD

      $scope.selection = {
        value: [],
        staticValue: [],
        finalValue :[],
        categories :[],
        staticCategories:[ "Health", "Politics" , "Environment", "Education"]
      };

      $rootScope.mainCategories = $scope.selection.finalValue;

      $scope.getPos = function(item,arr){   
        //console.log(arr.indexOf(item) +":"+item)

        if ($scope.selection.finalValue.indexOf(item) == -1
           && $scope.selection.value[arr.indexOf(item)]==true){
            
            $scope.selection.finalValue.push(item)
        }
        if ($scope.selection.finalValue.indexOf(item) != -1
            &&  ! $scope.selection.value[arr.indexOf(item)] ){
            //console.log($scope.selection.value[arr.indexOf(item)] + " remove:" + item +" :"+ arr.indexOf(item) )
            $scope.selection.finalValue.splice($scope.selection.finalValue.indexOf(item),1)
        }

        
        return arr.indexOf(item);

        
      }
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

      }

}])