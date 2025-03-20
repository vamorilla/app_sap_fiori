sap.ui.define([
    "modulo/proyectoprueba/utils/View1Services",
     "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function (View1Services, Filter, FilterOperator, JSONModel) {
    "use strict";

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

        setInitCategoriesProductModel: function(oComponent){
            oComponent.setModel(new JSONModel({
                valueInputSearch: '',
                selectedKey: ''
            }), "CategoriesProductModel")
        },

		getDataProducts: async function(aFilter) {
            console.log('filtros',aFilter)
            return View1Services.getProducts(this._oNorthwindModel, aFilter);
        }
    }    
});