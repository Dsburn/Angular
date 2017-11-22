import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from "../Component/CustomerComponent";
import { NgModule } from "@angular/core";
import { CustomerRoutes } from "../Routing/CustomerRouting";
import {CommonModule} from "@angular/common"

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(CustomerRoutes),ReactiveFormsModule],
    declarations: [
      CustomerComponent
    ],
    bootstrap: [CustomerComponent]
  })
  export class CustomerModuleLibrary {}