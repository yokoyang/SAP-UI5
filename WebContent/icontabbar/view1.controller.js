sap.ui.controller("icontabbar.view1", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf icontabbar.view1
     */
    onInit: function () {

        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("example.json");
        sap.ui.getCore().setModel(oModel);

        sap.ui.getCore().byId("idIconTabBarOrder").insertContent(sap.ui.getCore().byId("table"));
    },

//	onBeforeRendering: function() {
//
//	},


//	onAfterRendering: function() {
//
//	},


//	onExit: function() {
//
//	}
    handleIconTabBarSelect: function (oEvent) {

        var oBinding = sap.ui.getCore().byId("table").getBinding("items"),
            sKey = oEvent.getParameter("key"),
            oFilter;

        if (sKey === "pending") {
            oFilter = new sap.ui.model.Filter("Rating", "EQ", 2);
            console.log(oFilter);
            oBinding.filter([oFilter]);
        } else if (sKey === "accepted") {
            oFilter = new sap.ui.model.Filter("Rating", "EQ", 4);
            oBinding.filter([oFilter]);
        } else if (sKey === "rejected") {
            oFilter = new sap.ui.model.Filter("Rating", "EQ", 3);
            oBinding.filter([oFilter]);
        } else {
            oBinding.filter([]);
        }
    }
});