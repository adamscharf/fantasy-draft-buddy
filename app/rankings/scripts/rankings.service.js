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
  RankingService.$inject = ['LISTS', '$http', '$log'];
  function RankingService(LISTS, $http, $log){
    return {
      loadList : loadList
    };

    var path = "rankings/resources/";


    function loadList(list) {
      return $http.get("rankings/resources/" + list)
        .then(loadListSucceeded, loadListFailed);

      function loadListSucceeded(r) {
        return r.data;
      };

      function loadListFailed(e) {

      };
    };
  };

})();
