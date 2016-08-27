(function(){
  'use strict';

  angular
    .module('rankings')
    .service('RankingService', RankingService);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  RankingService.$inject = ['$http', '$log'];
  function RankingService($http, $log){
    return {
      loadWRs : loadWRs
    };

    function loadWRs() {
      var version = "FULL_PPR";

      return $http.get("rankings/resources/wr_full_point_tiers.json")
        .then(loadWRsSucceeded, loadWRsFailed);

      function loadWRsSucceeded(r) {
        $log.debug(r.data[0]);
        return r.data;
      };

      function loadWRsFailed(e) {

      };
    };
  };

})();
