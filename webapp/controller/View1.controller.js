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
			MessageBox.alert("Hola mundo");
		},

        onInputChange: function (oEvent) {
            var sValue = oEvent.getParameter("value").trim();
            var oViewModel = this.getView().getModel();

            oViewModel.setProperty("/isButtonEnabled", sValue.length > 0);
        },

        onShowGreeting: function () {
            var oInput = this.getView().byId("input-name");
            var userName = oInput.getValue().trim();

            var sMessage = this._oResourceBundle.getText("helloUser", [userName]);
            MessageBox.success(sMessage);
        }
    });
});