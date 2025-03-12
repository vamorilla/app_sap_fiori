sap.ui.define([
    "sap/ui/core/UIComponent",
    "modulo/proyectoprueba/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("modulo.proyectoprueba.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // Set the JSON model globally in the app
            this.setModel(models.createViewModel(), "viewModel");

            // enable routing
            this.getRouter().initialize();

        }
    });
});