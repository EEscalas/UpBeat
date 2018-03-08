import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartyListComponent } from './party-list/party-list.component';
import { HomeComponent } from './home/home.component';
import { ExistingPartyPasswordComponent } from './existing-party-password/existing-party-password.component';
<<<<<<< HEAD
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePartyComponent } from './create-party/create-party.component'
import { DjPlaylistComponent } from './dj-playlist/dj-playlist.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guest', component: PartyListComponent },
  { path: 'guest/:name/:id/password', component: ExistingPartyPasswordComponent },
  { path: 'guest/:name/:id', component: PlaylistComponent },
  { path: 'dj', component: CreatePartyComponent },
  { path: 'dj/:name', component: DjPlaylistComponent}
=======
import { DjLoginComponent } from './dj-login/dj-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guest', component: PartyListComponent },
  { path: 'guest/:name/password', component: ExistingPartyPasswordComponent },
  { path: 'dj/login', component: DjLoginComponent }
>>>>>>> e474e020eafbe93a76e37e1703a0c5f7edb1b10c
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
