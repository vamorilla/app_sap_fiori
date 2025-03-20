sap.ui.define([
    "sap/ui/core/UIComponent",
    "modulo/proyectoprueba/model/models",
    "modulo/proyectoprueba/utils/View1Helper"
], (UIComponent, models, View1Helper) => {
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
            //It could initialized in the Helper
            this.setModel(models.createProductsModel(), "productsModel");
            this.setModel(models.createProductDetailModel(), "productDetailModel");

            // enable routing
            this.getRouter().initialize();
            
            this.setInitModel(); 
        },

        setInitModel: function () {
            View1Helper.init(this.getModel());
            View1Helper.setInitCategoriesProductModel(this);
        }  
    });
});