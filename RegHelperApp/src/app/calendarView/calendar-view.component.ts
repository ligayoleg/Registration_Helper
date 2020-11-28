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

import {EventsService} from '../events.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
  dateOne: Date = new Date();

  work: number;
  play: number;

  allView: boolean = false;
  workView: boolean = false;
  playView: boolean = false;

  events: CalendarEvent[];

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  activeDayIsOpen : boolean = false;

  options: any;
  constructor(private _eventsService: EventsService) {
    this.events = _eventsService.getEvents();
  }

  ngOnInit(): void {
    this.dateOne.setFullYear(2020);
    this.dateOne.setMonth(7);
    this.dateOne.setDate(3);

    console.log(this.dateOne);

    // this.events = [
    //   {
    //     // First Event
    //     title: 'Event # 1',
    //     start: new Date("October 25, 2020 08:00:00"),
    //     draggable: true,
    //     end: new Date("October 25, 2020 09:00:00"), // an end date is always required for resizable events to work
    //     resizable: {
    //       beforeStart: true, // this allows you to configure the sides the event is resizable from
    //       afterEnd: true,
    //     },
    //     meta: "type#1",
    //     // actions: [
    //     //   {label: "Monday", onClick(e){console.log(e);}},
    //     //   {label: "Monday", onClick(e){console.log(e);}},
    //     //   {label: "Tuesday", onClick(e){console.log(e);}},
    //     //   {label: "Wednesday", onClick(e){console.log(e);}},
    //     //   {label: "Thursday", onClick(e){console.log(e);}},
    //     //   {label: "Friday", onClick(e){console.log(e);}},
    //     //   {label: "Saturday", onClick(e){console.log(e);}},
    //     // ],
    //   },
    //   {
    //     // Second Event
    //     title: 'Event # 2',
    //     start: new Date("October 26, 2020 07:00:00"),
    //     draggable: true,
    //     end: new Date("October 26, 2020 09:00:00"), // an end date is always required for resizable events to work
    //     resizable: {
    //       beforeStart: true, // this allows you to configure the sides the event is resizable from
    //       afterEnd: true,
    //     },
    //     meta: "type#2",
    //     // actions: [
    //     //   {label: "Monday", onClick(e){console.log(e);}},
    //     //   {label: "Monday", onClick(e){console.log(e);}},
    //     //   {label: "Tuesday", onClick(e){console.log(e);}},
    //     //   {label: "Wednesday", onClick(e){console.log(e);}},
    //     //   {label: "Thursday", onClick(e){console.log(e);}},
    //     //   {label: "Friday", onClick(e){console.log(e);}},
    //     //   {label: "Saturday", onClick(e){console.log(e);}},
    //     // ],
    //   },
    // ];
  }


  eventDropped({
    event,
    newStart,
    newEnd,
    allDay,
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.events.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.events.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }
}
