sap.ui.controller("test.view1", {


    onInit: function() {
        var oModel = new sap.ui.model.json.JSONModel();
        sap.ui.getCore().setModel(oModel);
    },

    navToview : function() {
        var json = {};
        json.fname = sap.ui.getCore().byId("field1").getValue();
        json.lname = sap.ui.getCore().byId("field2").getValue();
        sap.ui.getCore().getModel().setData(json);

        sap.ui.getCore().byId("shellId").removeAllWorksetItems();
        sap.ui.getCore().byId("shellId").setContent(sap.ui.getCore().byId("idview2"));

    }

});