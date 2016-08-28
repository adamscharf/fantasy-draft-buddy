// The main app module declaration.
// This file should declare the app module and its dependencies and nothing else.
//

(function() {

  'use strict';

  angular
    .module('app', [
    	'ui.router',
    	'app.core',
    	'ngMaterial',
    	'rankings'
    ]);

})();