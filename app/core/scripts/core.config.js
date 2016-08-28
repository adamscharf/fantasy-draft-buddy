/**
 * Top level route config
 */
(function() {
	angular
		.module('app.core')
		.config(config);

	config.$inject = ["$urlRouterProvider"];
	function config($urlRouterProvider) {
		// for all unmatched routes
    $urlRouterProvider.otherwise("/fantasy-draft-buddy");
  }
})();
