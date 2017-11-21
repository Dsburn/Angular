import { RouterModule } from "@angular/router";
import { SupplierComponent } from "../Component/SupplierComponent";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common/src/common_module";
import { SupplierRoutes } from "../Routing/SupplierRouting";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(SupplierRoutes),FormsModule,ReactiveFormsModule],
    declarations: [
      SupplierComponent
    ],
    bootstrap: [SupplierComponent]
  })
  export class SupplierModuleLibrary {}