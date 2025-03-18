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
            this.getView().bindElement({
                path: "/Products(" + sProductID + ")",
                parameters: {
                    expand: "Orders_Details"
                }
            })
        }
    });
})