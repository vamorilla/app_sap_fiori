sap.ui.define([
    "modulo/proyectoprueba/utils/View1Services",
     "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (View1Services, Filter, FilterOperator) {
    "use strict";

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

		getDataProducts: async function(sSearchQuery) {
            let oFilters = [];
             // If search query is provided, add a filter for ProductName
             if (sSearchQuery) {
                oFilters.push(new Filter("ProductName", FilterOperator.Contains, sSearchQuery));
            }
            return View1Services.getProducts(this._oNorthwindModel, oFilters);
        }
    }    
});