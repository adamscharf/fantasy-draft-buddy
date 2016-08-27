(function() {
  'use strict';

  angular
      .module('rankings')
      .controller('rankingController', rankingController);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  rankingController.$inject = ['RankingService', '$log'];
  function rankingController( RankingService, $log ) {
    var vm = this;

    vm.receivers = []

    activate();

    /////////////
    // Methods //
    /////////////

    function activate() {
      return loadWRs().then(function success(){
        $log.info("Ranking Controller Loaded");
      });
    };

    function loadWRs() {
      return RankingService.loadWRs().then(function success(data) {
        vm.receivers = data;
      });
    };

  };

})();
