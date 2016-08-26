/**
 * Top level route config
 */
(function() {
	angular
		.module('fantasy-draft-buddy.core')
		.config(config);

	config.$inject = ["$urlRouterProvider"];
	function config($urlRouterProvider) {
		// for all unmatched routes
    $urlRouterProvider.otherwise("/");
  }
})();
