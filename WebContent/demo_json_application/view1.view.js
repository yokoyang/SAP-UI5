sap.ui.jsview("icontabbar.view1", {

    getControllerName: function () {
        return "icontabbar.view1";
    },


    createContent: function (oController) {
        var oTable = new sap.m.Table("table", {
            headerText: "Table with different UI element",
            columns: [new sap.m.Column({
                header: [new sap.m.Label({text: "Product Name"})]
            }),
                new sap.m.Column({
                    header: [new sap.m.Label({text: "Description"})]
                }),
                new sap.m.Column({
                    header: [new sap.m.Label({text: "Rating"})]
                })
            ]
        });

        oTable.bindItems("/Products", new sap.m.ColumnListItem("listItem", {
            cells: [new sap.m.Text({text: "{Name}"}),
                new sap.m.Text({text: "{Description}"}),
                new sap.m.RatingIndicator({value: "{Rating}"})
            ]
        }));

        var oIcontabBar = new sap.m.IconTabBar("idIconTabBarOrder", {
            select: oController.handleIconTabBarSelect,
            items: [
                new sap.m.IconTabFilter({
                    key: "main",
                    text: "All Product",
                    icon: "sap-icon://product",
                }),
                new sap.m.IconTabSeparator({
                    icon: ""
                }),
                new sap.m.IconTabFilter({
                    key: "accepted",
                    text: "Approved",
                    icon: "sap-icon://accept",
                    iconColor: "Positive",
                }),

                new sap.m.IconTabSeparator({
                    icon: "sap-icon://process"
                }),
                new sap.m.IconTabFilter({
                    key: "rejected",
                    text: "Rejected",
                    icon: "sap-icon://alert",
                    iconColor: "Negative",
                }),
                new sap.m.IconTabSeparator({
                    icon: "sap-icon://process"
                }),
                new sap.m.IconTabFilter({
                    key: "pending",
                    text: "Pending",
                    icon: "sap-icon://pending",
                    iconColor: "Critical",
                })


            ]
        });

        var oPage = new sap.m.Page({
            title: "Example for IconTabBar",
            content: [oIcontabBar]
        });

        return oPage;
    }

});