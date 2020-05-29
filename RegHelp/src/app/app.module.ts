import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploaderComponent } from './uploader/uploader.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClassesComponent } from './classes/classes.component';
import { OrganizerComponent } from './organizer/organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploaderComponent,
    CalendarComponent,
    ClassesComponent,
    OrganizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
