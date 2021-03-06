/**
 * Define the feature's routes here
 */
(function() {
  'use strict';

  angular
    .module('rankings')
    .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
			$stateProvider
				.state('rankings', {
					url: "/",
					templateUrl: "rankings/view/rankings.html",
					controller: "rankingController",
					controllerAs: 'vm'
				});
    }

})();
