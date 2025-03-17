sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "modulo/proyectoprueba/utils/View1Helper"
], (Controller, MessageBox, View1Helper) => {
    "use strict";

    return Controller.extend("modulo.proyectoprueba.controller.View1", {
        onInit: function () {
            this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
             // Initialize the helper with the OData model
             var oModel = this.getOwnerComponent().getModel(); // Get the Northwind OData model
             View1Helper.init(oModel);
        },

        onAlertMessageBoxPress: function () {
            let sMessage = this._oResourceBundle.getText("helloWorld");
			MessageBox.alert(sMessage);
		},

        onInputChange: function (oEvent) {
            let sValue = oEvent.getParameter("value").trim();
            let oViewModel = this.getView().getModel("viewModel");

            oViewModel.setProperty("/isButtonEnabled", sValue.length > 0);
        },

        onShowGreeting: function () {
            let oInput = this.getView().byId("input-name");
            let userName = oInput.getValue().trim();

            let sMessage = this._oResourceBundle.getText("helloUser", [userName, "mi primer app"]);
            MessageBox.success(sMessage);
        },

        onFetchProducts: function () {
            let oProductsModel = this.getOwnerComponent().getModel("productsModel"); 

            View1Helper.getDataProducts()
                .then(function (aResponse) {
                    console.log("Productos obtenidos:", aResponse);
                    //Use prefix 'a' from Array for convention
                    let aProducts = aResponse[0].results || []; 
                    //Update the global products model
                    oProductsModel.setData({ products: aProducts });
                })
                .catch(function (error) {
                    console.error("Error al obtener productos:", error);
                });
        }
    });
});