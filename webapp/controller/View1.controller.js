sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("modulo.proyectoprueba.controller.View1", {
        onInit: function () {
            this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
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
        }
    });
});