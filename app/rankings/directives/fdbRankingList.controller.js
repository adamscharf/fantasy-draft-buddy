(function() {
  'use strict';

  angular
      .module('rankings')
      .controller('fdbRankingListController', fdbRankingListController);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  fdbRankingListController.$inject = ['LISTS', 'SCORING', 'EVENTS', 'RankingService', '$log', '$scope', '$timeout'];
  function fdbRankingListController( LISTS, SCORING, EVENTS, RankingService, $log, $scope, $timeout ) {
    var vm = this;

    vm.players = []
    vm.click = click;

    // console.log('CTRL: vm.min = %s', vm.min);
    // console.log('CTRL: vm.list = %s', vm.list);

    activate();

    /////////////
    // Methods //
    /////////////

    function activate() {
      // vm.list is passed into directive element
      return loadList().then(function success(){
        $log.info(vm.title + " Loaded");
      });
    };

    $scope.$on(EVENTS.SCORING_CHANGED, function () {
      $timeout(function() {
        loadList();
      });
    });

    function loadList() {
      var list = getListToLoad();
      return RankingService.loadList(list).then(function success(data) {
        return vm.players = data;
      });
    };

    function getListToLoad() {
      switch (vm.receptionFormat) {
        case SCORING.FULL_PPR:
          if (vm.abrev === "WR") {
            return LISTS.WR_FULL_PPR_TIERS;
          } else if (vm.abrev === "RB") {
            return LISTS.RB_FULL_PPR_TIERS;
          } else {
            return LISTS.TE_FULL_PPR_TIERS;
          }
          break;
        case SCORING.HALF_PPR:
          if (vm.abrev === "WR") {
            return LISTS.WR_HALF_PPR_TIERS;
          } else if (vm.abrev === "RB") {
            return LISTS.RB_HALF_PPR_TIERS;
          } else {
            return LISTS.TE_HALF_PPR_TIERS;
          }
          break;
        case SCORING.STANDARD:
          if (vm.abrev === "WR") {
            return LISTS.WR_STD_TIERS;
          } else if (vm.abrev === "RB") {
            return LISTS.RB_STD_TIERS;
          } else {
            return LISTS.TE_STD_TIERS;
          }
          break;
        default:
          // Must be a QB
          return (vm.qbFormat === SCORING.STANDARD) ? LISTS.QB_FOUR_POINT_TIERS : LISTS.QB_SIX_POINT_TIERS;
      }
    };

    function click(player) {
      var index = vm.players.indexOf(player);
      if (index > -1) {
        vm.players.splice(index, 1);
      }
    };

  };

})();
