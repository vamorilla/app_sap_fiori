sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("modulo.proyectoprueba.controller.Detail", {
        onInit: function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
        }, 

        _onProductMatched: function (oEvent) {
            let sProductID = oEvent.getParameter("arguments").ProductID;
            
            let oModel = this.getOwnerComponent().getModel();
            let oProductDetailModel = this.getOwnerComponent().getModel("productDetailModel");
            //I am using a separate JSON model and need to store data manually
            oModel.read("/Products(" + sProductID + ")", {
                urlParameters: {
                    "$expand": "Order_Details" 
                },
                success: (oData) => {
                    oProductDetailModel.setData(oData); 
                },
                error: (oError) => {
                    console.error("Error:", oError);
                }
            });
        }
    });
})