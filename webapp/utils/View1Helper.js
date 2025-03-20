sap.ui.define([
    "modulo/proyectoprueba/utils/View1Services",
    "sap/ui/model/json/JSONModel"
], function (View1Services, JSONModel) {
    "use strict";

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

        setInitCategoriesProductModel: function(oComponent){
            oComponent.setModel(new JSONModel({
                valueInputSearch: '',
                selectedKey: '',
                selectedSuppliers: []
            }), "CategoriesProductModel")
        },

		getDataProducts: async function(aFilter) {
            return View1Services.getProducts(this._oNorthwindModel, aFilter);
        },
    }    
});