sap.ui.jsview("test.view2", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf test.view2
     */
    getControllerName : function() {
        return "test.view2";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf test.view2
     */
    createContent : function(oController) {


        var oPanel = new sap.ui.commons.Panel({
            text: "View2",
            showCollapseIcon: false,
        });

        var oMatrix = new sap.ui.commons.layout.MatrixLayout({
            layoutFixed: false,
        });

        oMatrix.createRow(
            new sap.ui.commons.TextView({text : "Hi {/lname}{/fname}, Welcome to InkYourCode.com", design : sap.ui.commons.LabelDesign.Bold })
        );

        oMatrix.createRow(
            new sap.ui.commons.Button({
                "text": "Back",
                press : function (){
                    sap.ui.getCore().byId("shellId").removeAllWorksetItems();
                    sap.ui.getCore().byId("shellId").setContent(sap.ui.getCore().byId("idview1"));
                }
            })

        );


        oPanel.addContent(oMatrix);

        return oPanel;
    }

});