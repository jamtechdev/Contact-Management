import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsPipe } from './contacts.pipe';
import { HomeComponent } from './home/home.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { EmailsListComponent } from './emails-list/emails-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsPipe,
    HomeComponent,
    ContactsDetailsComponent,
    EmailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
