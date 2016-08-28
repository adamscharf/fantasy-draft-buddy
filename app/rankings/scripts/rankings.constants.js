(function() {
  'use strict';
	
	angular
    .module('rankings')
    .constant('LISTS', {
      // QB's
      QB_SIX_POINT_TIERS: 'qb_6pt_tiers.json',
      QB_FOUR_POINT_TIERS: 'qb_4pt_tiers.json',
      // RB's
      RB_FULL_PPR_TIERS:  'rb_full_point_tiers.json',
      RB_HALF_PPR_TIERS:  'rb_half_point_tiers.json',
      RB_STD_TIERS:       'rb_standard_tiers.json',
      // TE's
      TE_FULL_PPR_TIERS:  'te_full_point_tiers.json',
      TE_HALF_PPR_TIERS:  'te_half_point_tiers.json',
      TE_STD_TIERS:       'te_standard_tiers.json',
      // WR's
      WR_FULL_PPR_TIERS:  'wr_full_point_tiers.json',
      WR_HALF_PPR_TIERS:  'wr_half_point_tiers.json',
      WR_STD_TIERS:       'wr_standard_tiers.json'
    })
    .constant('SCORING', {
      FULL_PPR: 'FULL_PPR',
      HALF_PPR: 'HALF_PPR',
      STANDARD: 'STANDARD',
      SIX_PT_TD: "SIX_PT_TD"

    }); 
})();