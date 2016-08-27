/* customer-info.directive.js */

/**
* @desc sales directive that can be used anywhere across the sales app at a company named Acme
* @example <fdb-ranking-list></fdb-ranking-list>
*/
angular
    .module('rankings')
    .directive('fdbRankingList', fdbRankingList);

function fdbRankingList() {
	var directive = {
      	restrict: 'EA',
        templateUrl: '/rankings/directives/single-list.html',
        scope: {
          list: '=',
          name: '='
        },
        link: linkFunc,
        controller: 'fdbRankingListController',
        controllerAs: 'vm',
        bindToController: true // because the scope is isolated
	};
	return directive;

	function linkFunc(scope, el, attrs, vm) {
        // console.log('LINK: vm.min = %s', vm.min);
        // console.log('LINK: vm.list = %s', vm.list);
	}
}