"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var core_1 = require("@angular/core");
var SupplierRouting_1 = require("../Routing/SupplierRouting");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var SupplierModuleLibrary = /** @class */ (function () {
    function SupplierModuleLibrary() {
    }
    SupplierModuleLibrary = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(SupplierRouting_1.SupplierRoutes), forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                SupplierComponent_1.SupplierComponent
            ],
            bootstrap: [SupplierComponent_1.SupplierComponent]
        })
    ], SupplierModuleLibrary);
    return SupplierModuleLibrary;
}());
exports.SupplierModuleLibrary = SupplierModuleLibrary;
//# sourceMappingURL=SupplierModuleLibrary.js.map