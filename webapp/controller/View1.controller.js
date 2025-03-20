sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "modulo/proyectoprueba/utils/View1Helper",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
], (Controller, MessageBox, View1Helper, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("modulo.proyectoprueba.controller.View1", {
        onInit: function () {
            this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
             // Initialize the helper with the OData model
             var oModel = this.getOwnerComponent().getModel(); // Get the Northwind OData model
             View1Helper.init(oModel);
             this.oRouter = this.getOwnerComponent().getRouter();
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

        onFetchProducts: async function () {
            let aFilter = [];
            let categoriesModelValues= this.getOwnerComponent().getModel("CategoriesProductModel").getData();
            let oProductsModel = this.getOwnerComponent().getModel("productsModel"); 

            if(categoriesModelValues.valueInputSearch){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, categoriesModelValues.valueInputSearch))
            }

            if(categoriesModelValues.selectedKey){
                aFilter.push(new Filter("CategoryID", FilterOperator.EQ, categoriesModelValues.selectedKey))
            }

            try {
                let aDatos = await View1Helper.getDataProducts(aFilter);
                console.log("Fetched products:", aDatos);
        
                oProductsModel.setData({ products: aDatos[0].results || [] }); 
            } catch (error) {
                console.error("Error fetching filtered products:", error);
            }
        },

        onShowDetail: function(oEvent){
            //Gets the clicked item
            let oItem = oEvent.getSource();
            //Gets the product data
            let oBindingContext = oItem.getBindingContext("productsModel");

            let oProduct = oBindingContext.getObject();
    
            this.oRouter.navTo("detail", {
                ProductID: oProduct.ProductID
            })
        }
    });
});