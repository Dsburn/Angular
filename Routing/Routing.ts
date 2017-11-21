import { CustomerComponent } from "../Component/CustomerComponent";
import { SupplierComponent } from "../Component/SupplierComponent";
import { WelcomeComponent } from "../Component/WelcomeComponent";

export const ApplicationRoutes = [
  {
    path: "Customer",
    loadChildren: "../Module/CustomerModuleLibrary#CustomerModuleLibrary"
  },
  {
    path: "Supplier",
    loadChildren: "../Module/SupplierModuleLibrary#SupplierModuleLibrary"
  },
  { path: "", component: WelcomeComponent }
];
