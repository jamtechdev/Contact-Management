import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactModel} from '../_models/contact'
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  getContacts() {
    return this.http.get<ContactModel[]>(`http://localhost:3000/contacts`, {}).pipe(map(contact => contact));
  }
  getContactsById(id: any) {
    return this.http.get<ContactModel>(`http://localhost:3000/contacts/${id}`, {}).pipe(map(contact => contact));
  }
}
