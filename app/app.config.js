// This file should declare the run/config block
// for the main app module and nothing else.
//

(function() {

  'use strict';

  angular
    .module('fantasy-draft-buddy')
    .run( sandboxRun);


  sandboxRun.$inject = ['$rootScope', '$state']
  function sandboxRun($rootScope, $state){
  	$rootScope.$state = $state;
  }


})();