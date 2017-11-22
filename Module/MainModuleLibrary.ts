import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { WelcomeComponent } from "../Component/WelcomeComponent";
import { MasterPageComponent } from "../Component/MasterPageComponent";
import { ApplicationModule } from "@angular/core/src/application_module";
import {RouterModule} from "@angular/router";
import { ApplicationRoutes } from "../Routing/Routing";
import { Router } from "@angular/router/src/router";



@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ApplicationRoutes),ReactiveFormsModule],
  declarations: [
    WelcomeComponent,
    MasterPageComponent
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModuleLibrary {}
