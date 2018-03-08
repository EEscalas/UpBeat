import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartyListComponent } from './party-list/party-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExistingPartyPasswordComponent } from './existing-party-password/existing-party-password.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePartyComponent } from './create-party/create-party.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartyListComponent,
    ExistingPartyPasswordComponent,
    PlaylistComponent,
    CreatePartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
