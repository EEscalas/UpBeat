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
<<<<<<< HEAD
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePartyComponent } from './create-party/create-party.component';
import { DjPlaylistComponent } from './dj-playlist/dj-playlist.component';
=======
import { DjLoginComponent } from './dj-login/dj-login.component';
>>>>>>> e474e020eafbe93a76e37e1703a0c5f7edb1b10c
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartyListComponent,
    ExistingPartyPasswordComponent,
<<<<<<< HEAD
    PlaylistComponent,
    CreatePartyComponent,
    DjPlaylistComponent
=======
    DjLoginComponent
>>>>>>> e474e020eafbe93a76e37e1703a0c5f7edb1b10c
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
