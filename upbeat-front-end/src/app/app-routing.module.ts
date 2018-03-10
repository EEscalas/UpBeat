import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartyListComponent } from './party-list/party-list.component';
import { HomeComponent } from './home/home.component';
import { ExistingPartyPasswordComponent } from './existing-party-password/existing-party-password.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePartyComponent } from './create-party/create-party.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guest', component: PartyListComponent },
  { path: 'guest/:name/:id/password', component: ExistingPartyPasswordComponent },
  { path: 'guest/:name/:id', component: PlaylistComponent },
  { path: 'dj', component: CreatePartyComponent },
  { path: 'dj/:name', component: PlaylistComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
