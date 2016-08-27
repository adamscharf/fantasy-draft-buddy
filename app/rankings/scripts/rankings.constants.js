(function() {
  'use strict';
	
	angular
    .module('rankings')
    .constant('LISTS', {
      // QB's
      QB_SIX_POINT_TIERS: 'qb_6pt_tiers.json',
      // RB's
      RB_FULL_PPR_TIERS: 'rb_full_point_tiers.json',
      // TE's
      TE_FULL_PPR_TIERS: 'te_full_point_tiers.json',
      // WR's
      WR_FULL_PPR_TIERS : 'wr_full_point_tiers.json',
    });
})();