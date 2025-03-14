sap.ui.define([
    "modulo/proyectoprueba/utils/View1Services"
], function (View1Services) {
    "use strict";

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

		getDataProducts: async function() {
            let oFilters = [];
            return View1Services.getProducts(this._oNorthwindModel, oFilters);
        }
    }    
});