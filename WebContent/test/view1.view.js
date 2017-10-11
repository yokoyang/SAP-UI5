sap.ui.jsview("test.view1", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf test.view1
     */
    getControllerName : function() {
        return "test.view1";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf test.view1
     */
    createContent : function(oController) {

        var oPanel = new sap.ui.commons.Panel({
            text: "View1",
            showCollapseIcon: false,
        });

        var oMatrix = new sap.ui.commons.layout.MatrixLayout({
            layoutFixed: false,
            widths:["20%", "80%"],
            columns: 2
        });

        oMatrix.createRow(
            new sap.ui.commons.Label({text : "First Name", design : sap.ui.commons.LabelDesign.Bold }),
            new sap.ui.commons.TextField("field1",{placeholde : "fname"})
        );

        oMatrix.createRow(
            new sap.ui.commons.Label({text : "Last Name", design : sap.ui.commons.LabelDesign.Bold }),
            new sap.ui.commons.TextField("field2",{placeholder : "lname"})
        );

        oMatrix.createRow(
            new sap.ui.commons.Button({
                "text": "Submit",
                press : oController.navToview
            })
        );


        oPanel.addContent(oMatrix);

        return oPanel;

    }

});