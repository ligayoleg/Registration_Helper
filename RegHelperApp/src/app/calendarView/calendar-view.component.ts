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
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
  dateOne: Date = new Date();

  val: number;

  events: CalendarEvent[] = [
    {
      // First Event
      title: 'Class # 1',
      start: this.dateOne,
      draggable: true,
      end: addDays(new Date(), 1), // an end date is always required for resizable events to work
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true,
      },
    },
    {
      // Another event
      title: 'A non draggable event',
      start: new Date(),
    },
  ];

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  options: any;
  constructor() {}

  ngOnInit(): void {
    this.dateOne.setFullYear(2020);
    this.dateOne.setMonth(7);
    this.dateOne.setDate(3);

    console.log(this.dateOne);
  }
}
