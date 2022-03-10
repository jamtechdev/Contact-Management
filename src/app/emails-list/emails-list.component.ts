import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from '../_services/contact.service'
import {first} from "rxjs";
@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.scss']
})
export class EmailsListComponent implements OnInit {
contactId: any
  contact: any
  constructor(private route: ActivatedRoute,private contactService: ContactService) {
    this.route.queryParams.subscribe(params => {
      this.contactId = params['id'];
    });
  }

  ngOnInit(): void {
  this.contactService.getContactsById(this.contactId).pipe(first()).subscribe({
    next: (contact) => {
      this.contact = contact
    }
  });
  }

}
