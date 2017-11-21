"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
exports.ApplicationRoutes = [
    {
        path: "Customer",
        loadChildren: "../Module/CustomerModuleLibrary#CustomerModuleLibrary"
    },
    {
        path: "Supplier",
        loadChildren: "../Module/SupplierModuleLibrary#SupplierModuleLibrary"
    },
    { path: "", component: WelcomeComponent_1.WelcomeComponent }
];
//# sourceMappingURL=Routing.js.map