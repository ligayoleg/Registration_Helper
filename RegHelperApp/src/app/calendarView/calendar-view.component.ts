import { 
  Component, 
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, 
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';


@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      start: new Date(),
      draggable: true,
      end: addDays(new Date(), 1), // an end date is always required for resizable events to work
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true,
      },
    },
    {
      title: 'A non draggable event',
      start: new Date(),
    },
  ];;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  options: any;
  constructor() { }

  ngOnInit(): void {
  
  }

}
