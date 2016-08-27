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
  rankingController.$inject = ['LISTS', 'RankingService', '$log'];
  function rankingController( LISTS, RankingService, $log ) {
    var vm = this;

    vm.LISTS = LISTS;

    activate();

    /////////////
    // Methods //
    /////////////

    function activate() {
      // return loadList(LISTS.WR_FULL_PPR_TIERS).then(function success(){
        $log.info("Ranking Controller Loaded");
      // });
    };

  };

})();
