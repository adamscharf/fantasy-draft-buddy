/** 
 * Define the feature's routes here
 */
(function() {
  'use strict';

  angular
    .module('example-feature')
    .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {			
			$stateProvider
				.state('angular-starter', {
					url: "/",
					templateUrl: "example-feature/partials/feature.html",
					controller: "featureController",
					controllerAs: 'vm'
				});	
    }

})();
