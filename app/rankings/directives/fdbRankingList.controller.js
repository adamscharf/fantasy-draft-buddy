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
  fdbRankingListController.$inject = ['LISTS', 'RankingService', '$log', '$scope'];
  function fdbRankingListController( LISTS, RankingService, $log, $scope ) {
    var vm = this;

    vm.players = []
    vm.click = click;

    vm.min = 3;

    // console.log('CTRL: vm.min = %s', vm.min);
    // console.log('CTRL: vm.list = %s', vm.list);

    activate();

    /////////////
    // Methods //
    /////////////

    function activate() {
      // vm.list is passed into directive element
      return loadList(vm.list).then(function success(){
        $log.info(vm.name + " Loaded");
      });
    };

    function loadList(list) {
      return RankingService.loadList(list).then(function success(data) {
        vm.players = data;
      });
    };

    function click(player) {
      var index = vm.players.indexOf(player);
      if (index > -1) {
        vm.players.splice(index, 1);
      }
    };

  };

})();
