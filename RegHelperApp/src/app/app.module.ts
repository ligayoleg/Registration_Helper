import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { PanelModule } from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SidebarModule} from 'primeng/sidebar';
import {CalendarModule as primengCalendar} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesViewComponent } from './classesView/classes-view.component';
import { HomeViewComponent } from './homeView/home-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CalendarViewComponent } from './calendarView/calendar-view.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ClassesViewComponent,
    HomeViewComponent,
    NavigationComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    primengCalendar,
    DropdownModule,
    InputSwitchModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    StepsModule,
    SidebarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
