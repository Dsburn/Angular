"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var core_1 = require("@angular/core");
var common_module_1 = require("@angular/common/src/common_module");
var CustomerRouting_1 = require("../Routing/CustomerRouting");
var CustomerModuleLibrary = /** @class */ (function () {
    function CustomerModuleLibrary() {
    }
    CustomerModuleLibrary = __decorate([
        core_1.NgModule({
            imports: [common_module_1.CommonModule, forms_1.FormsModule, router_1.RouterModule.forChild(CustomerRouting_1.CustomerRoutes), forms_1.ReactiveFormsModule],
            declarations: [
                CustomerComponent_1.CustomerComponent
            ],
            bootstrap: [CustomerComponent_1.CustomerComponent]
        })
    ], CustomerModuleLibrary);
    return CustomerModuleLibrary;
}());
exports.CustomerModuleLibrary = CustomerModuleLibrary;
//# sourceMappingURL=CustomerModuleLibrary.js.map