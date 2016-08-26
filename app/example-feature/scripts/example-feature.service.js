/**
 * A service example
 *
 * Use services to share common functionality across 
 * modules (such as interacting with an API via $http).
 */
(function() {	
	'use strict';
  
	angular
		.module('example-feature')
		.factory('featureService', featureService);

	featureService.$inject = ['$http', '$q'];
  function featureService($http, $q) {
    return {
      getMockData: function() {
      	var mock = { 
      		"data": [ 
      			"one", "two", "three" 
      		] 
      	};

      	return mock;

      	// A real API $http pattern is below
        //
        // var deferred = $q.defer();
        //
        // $http.get('api/some/endpoint')
        //   .success(function(response) {
        //     deferred.resolve(response);
        //   })
        //   .error(function(error) {
        //     deferred.reject(error);
        //   });
  			//
        // return deferred.promise;
      }
    };
  }
})();
