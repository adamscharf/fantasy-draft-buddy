/**
 * Angular Controller Example
 *
 * Use controllers to:
 *    - set the initial state of views
 *    - modify or add to views in response to events
 */
(function() {
  'use strict';

	angular
		.module('example-feature')
		.controller('featureController', featureController);

	featureController.$inject = ['featureService'];
  function featureController(featureService) {
  	// use a view model with controllerAs syntax to avoid using $scope directly
  	var vm = this; 

  	activate();

  	function activate() {
      // use an injected service to fetch 
      // some data and expose it to the view
      vm.result = featureService.getMockData();
  	}
  }
})();

