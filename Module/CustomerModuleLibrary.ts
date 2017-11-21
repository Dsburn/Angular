import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from "../Component/CustomerComponent";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common/src/common_module";
import { CustomerRoutes } from "../Routing/CustomerRouting";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(CustomerRoutes),ReactiveFormsModule],
    declarations: [
      CustomerComponent
    ],
    bootstrap: [CustomerComponent]
  })
  export class CustomerModuleLibrary {}