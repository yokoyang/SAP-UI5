sap.ui.jsview("icontabbar.view2", {

    getControllerName : function() {
        return "icontabbar.view2";
    },


    createContent : function(oController) {
        var oForm = new sap.ui.layout.form.SimpleForm({
            title: "Sample Form",
            editable: true,
            width: "600px",
            content: [
                new sap.m.Label({ text:"Name" }),
                new sap.m.Input({ placeholder:"Enter name here", width: "200px" }),

                new sap.m.Label({ text:"Company" }),
                new sap.m.Input({ value:"InkYourCode", width: "200px" })
            ]
        });

        var oEmailLabel = new sap.m.Label({ text:"Email"});
        var oEmailField = new sap.m.Input({width: "200px"});

        oForm.addContent(oEmailLabel);
        oForm.addContent(oEmailField);

        var oPage = new sap.m.Page({
            title : "Example for IconTabBar",
            content : [oForm]
        });

        return oPage;
    }

});