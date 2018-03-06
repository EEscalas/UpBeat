import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartyListComponent } from './party-list/party-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExistingPartyPasswordComponent } from './existing-party-password/existing-party-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartyListComponent,
    ExistingPartyPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
