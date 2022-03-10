import {Component, NgModule, OnInit} from '@angular/core';
import {ContactModel} from "../_models/contact";
import {ContactService} from "../_services/contact.service";
import {first} from "rxjs";
import {ContactsDetailsComponent} from '../contacts-details/contacts-details.component'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent {
  contacts: ContactModel[] | undefined;
  details : ContactModel | undefined
  constructor(private contactService: ContactService) {
    this.contactService.getContacts().pipe(first()).subscribe({
      next: (contact) => {
        this.details = contact[0]
        this.contacts = contact;
      }
    });
  }
  getDetails(contact : ContactModel){
   return this.details = contact
  }
}
