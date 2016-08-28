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
  rankingController.$inject = ['LISTS', 'SCORING', 'RankingService', '$log', '$mdDialog'];
  function rankingController( LISTS, SCORING, RankingService, $log, $mdDialog ) {
    var vm = this;

    vm.LISTS = LISTS;
    vm.showNotes = false;
    vm.receptionValue = {};
    vm.tiers = true;
    vm.scoringConfig = {};

    vm.qbFormat = SCORING.SIX_PT_TD;
    vm.receptionFormat = SCORING.FULL_PPR;

    vm.config = {};

    activate();

    /////////////
    // Methods //
    /////////////

    function activate() {
      // return loadList(LISTS.WR_FULL_PPR_TIERS).then(function success(){
        // showAlert();
        $log.info("Ranking Controller Loaded");
      // });
    };

    function showAlert(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(false)
          .title('Hold Up!')
          .textContent('By selecting below, you agree that you have already paid for the Ultimate Draft Kit at www.thefantasyfootballers.com')
          .ariaLabel('Alert Dialog Demo')
          .ok('Yes, I have purchased it')
          .targetEvent(ev)
      );
    };

    vm.scoringConfig = {
      "receptionFormat": [
        {
          "label": "Full PPR",
          "value": SCORING.FULL_PPR
        },
        {
          "label": "Half PPR",
          "value": SCORING.HALF_PPR
        },
        {
          "label": "Standard",
          "value": SCORING.STANDARD
        }
      ],
      "qbFormat": [
        {
          "label": "6 Point TDs",
          "value": SCORING.SIX_PT_TD
        },
        {
          "label": "4 Point TDs",
          "value": SCORING.STANDARD
        }
      ]
    };

  };

})();
