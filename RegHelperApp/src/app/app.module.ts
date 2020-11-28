import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule as primengCalendar } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenubarModule } from 'primeng/menubar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesViewComponent } from './classesView/classes-view.component';
import { HomeViewComponent } from './homeView/home-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CalendarViewComponent } from './calendarView/calendar-view.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CarService } from './carservice';
import { ClassesViewService } from './classesView/classes-view.service';
import { EventsService } from './events.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassesViewComponent,
    HomeViewComponent,
    NavigationComponent,
    CalendarViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    primengCalendar,
    DropdownModule,
    InputSwitchModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    StepsModule,
    SidebarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    TableModule,
    ToastModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ProgressBarModule,
    MenubarModule,
    SelectButtonModule,
    ProgressSpinnerModule,
  ],
  providers: [CarService, ClassesViewService, EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
