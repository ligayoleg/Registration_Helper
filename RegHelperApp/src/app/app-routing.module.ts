import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassesViewComponent} from './classesView/classes-view.component';
import {HomeViewComponent} from './homeView/home-view.component';
import {CalendarViewComponent} from './calendarView/calendar-view.component';

const routes: Routes = [
  {path: 'homeView', component: HomeViewComponent},
  {path: 'classesView', component: ClassesViewComponent},
  {path: 'calendarView', component: CalendarViewComponent},
  {path: '', redirectTo: 'homeView', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
