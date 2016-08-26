// The main app module declaration.
// This file should declare the app module and its dependencies and nothing else.
//

(function() {

  'use strict';

  angular
    .module('fantasy-draft-buddy', [
    	'ui.router',
    	'fantasy-draft-buddy.core',
    	'example-feature'
    ]);

})();