import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { ViewPeriod } from 'calendar-utils';
import moment from 'moment-timezone';

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
  CalendarDayViewBeforeRenderEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarCommonModule,
  CalendarWeekViewComponent
} from 'angular-calendar';

import {Event} from '../models/event.model';
import {EventsService} from '../events.service';

import RRule from 'rrule';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
  dateOne: Date = new Date();
  defaultDate:Date =  new Date('January 3 2021 04:00:00');
  
  work: number;
  play: number;

  allView: boolean = false;
  workView: boolean = false;
  playView: boolean = false;


  shownEvents: CalendarEvent[] = [];
  calendarEvents: CalendarEvent[] = [];
  events: Event[];

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = this.defaultDate;

  activeDayIsOpen : boolean = false;

  options: any;
  constructor(private _eventsService: EventsService, private cdr: ChangeDetectorRef) {
    this.events = _eventsService.getEvents();
  }

  ngOnInit(): void {
    this.dateOne.setFullYear(2020);
    this.dateOne.setMonth(7); 
    this.dateOne.setDate(3);
 
    this.events.forEach(event => {
      console.log(event);
      event.days.forEach(day => {
        this.shownEvents.push(day);
      })
    })

    this.shownEvents.forEach(event => {
      event.start = new Date(this.defaultDate);
      event.meta = this.getDayOfWeek(event.start);
    })
    console.log(this.shownEvents);
    
    this.updateEventsWeekly(this.work);
  }

  updateEventsWeekly( weekAdjuster){
    
    //Range from 0-100 to 0-7
    let OldRange = (100 - 0);  
    let NewRange = (6 - 0)  ;
    let NewValue;
    if(weekAdjuster !== undefined){
      NewValue = Math.round((((weekAdjuster.value - 0) * NewRange) / OldRange) + 0);  
    }
    
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek;
    dayOfWeek = week[NewValue];
    //console.log({NewValue, dayOfWeek});
    
    //this.shownEvents[0].start.setDate()
  }

  viewPeriod: ViewPeriod;


  // updateCalendarEvents(
  //   viewRender:
  //     | CalendarWeekViewBeforeRenderEvent
  //     | CalendarDayViewBeforeRenderEvent
  // ): void {
  //   if (
  //     !this.viewPeriod
  //   ) {
  //     this.viewPeriod = viewRender.period;
  //     this.calendarEvents = [];

  //     this.events.forEach((event) => {
  //       const rule: RRule = new RRule({
  //         ...event.rrule,
  //         dtstart: viewRender.period.start,
  //         until: viewRender.period.end,
  //       });
  //       const { title } = event;

  //       rule.all().forEach((date) => {
  //         this.calendarEvents.push({
  //           title, 
  //           start: date,
  //         });
  //       });
  //     });
  //     this.cdr.detectChanges();
  //   }
  // }



  getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();  
    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  


  recurringEvents: RecurringEvent[] = [
    {
      title: 'Recurs on the 5th of each month',
      
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5,
      },
    },
    {
      title: 'Recurs yearly on the 10th of the current month',
      
      rrule: {
        freq: RRule.YEARLY,
        bymonth: moment().month() + 1,
        bymonthday: 10,
      },
    },
    {
      title: 'Recurs daily',
      
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO,RRule.TU,RRule.WE,RRule.TH,RRule.FR],
        
      },
    },
    
  ];

  // calendarEvents: CalendarEvent[] = [];

  // viewPeriod: ViewPeriod;

  // constructor(private cdr: ChangeDetectorRef) {}

  updateCalendarEvents(
    viewRender:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ): void {
    if (
      !this.viewPeriod ||
      !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||
      !moment(this.viewPeriod.end).isSame(viewRender.period.end)
    ) {
      this.viewPeriod = viewRender.period;
      this.calendarEvents = [];

      this.recurringEvents.forEach((event) => {
        const rule: RRule = new RRule({
          ...event.rrule,
          dtstart: moment(viewRender.period.start).startOf('day').toDate(),
          until: moment(viewRender.period.end).endOf('day').toDate(),
        });
        const { title, color } = event;

        rule.all().forEach((date) => {
          this.calendarEvents.push({
            title,
            color,
            start: moment(date).toDate(),
          });
        });
      });
      this.cdr.detectChanges();
    }
    console.log(this.calendarEvents);
  }
}

interface RecurringEvent {
  title: string;
  color?: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
    byhour?: any,
  };
}
