import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from "../_models/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  @Input() details?: ContactModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loadEmailDetailsPage(id:any){
    // this.router.navigate(['email_addresses', {id}])
    this.router.navigate(['email_addresses'], {queryParams: {id}});
  }
}
