import { Component } from "@angular/core";
//importing the customer model
import { Customer } from "../Model/Customer";
@Component({
  templateUrl: "../UI/Customer.html"
})
export class CustomerComponent {
  //this is binding
  CurrentCustomer: Customer = new Customer();
}
