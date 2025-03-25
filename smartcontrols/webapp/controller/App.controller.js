sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("modulo.proyectoprueba.smartcontrols.controller.App", {
        onInit: function () {
            
        },

        onBeforeRebind: function (oEvent) {
            const oBindingParams = oEvent.getParameter("bindingParams");
        
            oBindingParams.filters.push(
                new Filter("IsActiveEntity", FilterOperator.EQ, true)
            );
        }
    });
});
