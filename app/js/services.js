(function() {
   'use strict';

   /* Services */

	angular.module('myApp.services', ['myApp.service.login', 'myApp.service.firebase'])

      // put your services here!
      // .service('serviceName', ['dependency', function(dependency) {}]);
		.factory('Phone', ['$resource',
  			function($resource){
    		return $resource('phones/:phoneId.json', {}, {
      		query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    		});
  		}]);

})();

