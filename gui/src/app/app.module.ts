import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { KomitetComponent } from './komitet/komitet.component';
import { ApiService } from './_services/api.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MeetingComponent } from './meeting/meeting.component';
import { HomeComponent } from './home/home.component';
import { DBContext } from './_services/mokdb.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    KomitetComponent,
    MeetingComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ApiService,
    DBContext
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
