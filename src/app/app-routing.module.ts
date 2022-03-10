import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'email_addresses', component: EmailsListComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
