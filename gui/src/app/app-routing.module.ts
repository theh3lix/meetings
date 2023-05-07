import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomitetComponent } from './komitet/komitet.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MeetingComponent } from './meeting/meeting.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'komitet/:id', component: KomitetComponent },
  {path: 'agenda/:id', component: AgendaComponent },
  {path: 'meeting/:id', component: MeetingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
