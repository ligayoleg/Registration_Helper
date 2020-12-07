import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { ViewPeriod } from 'calendar-utils';
import * as moment from 'moment-timezone';

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
  defaultDate:Date =  new Date('January 5 2021 ');
  
  
  daysNum: number;
  hoursNum: number;

  allView: boolean = false;
  workView: boolean = false;
  playView: boolean = false;

  refresh: Subject<any> = new Subject();

  recurringEvents: RecurringEvent[] = [];

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
    this.recurringEvents = _eventsService.recurringEvents;
  }

  ngOnInit(): void {
    this.dateOne.setFullYear(2020);
    this.dateOne.setMonth(7); 
    this.dateOne.setDate(3);
 
    this.events.forEach(event => {
     
      event.days.forEach(day => {
        this.shownEvents.push(day);
      })
    })

    this.shownEvents.forEach(event => {
      event.start = new Date(this.defaultDate);
      event.meta = this.getDayOfWeek(event.start);
    })
    
    
    this.updateEventsWeekly(this.daysNum);
  }

  updateEventsWeekly( weekAdjuster){
    
    //Range from 0-100 to 0-7
    let OldRange = (100 - 0);  
    let NewRange = (9 - 3)  ;
    let NewValue;
    if(weekAdjuster !== undefined){
      NewValue = Math.round((((weekAdjuster.value - 0) * NewRange) / OldRange) + 0);  
    }
    
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek;
    dayOfWeek = week[NewValue];
    
    //console.log({NewValue, dayOfWeek});
    this.calendarEvents.forEach(event=>{
     
    })
    //this.shownEvents[0].start.setDate()
    this.refreshView();
  }

  viewPeriod: ViewPeriod;

  getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();  
    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

 

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
    
  }

  randomizeEvents(){
    
    this.calendarEvents.forEach(event=>{
      let randomNum = this.getRandomArbitrary(3,9);
      let randomTime = this.getRandomArbitrary(0,23);
      let currentDay = new Date;
      
      event.start.setDate(parseInt(randomNum));
      event.start.setTime(event.start.getTime() + parseInt(randomTime) * 60000 *60 );
      console.log(event.start);
      
      this.defaultDate = event.start;
    })
    console.log(this.calendarEvents);
    this.refreshView();
  }

  getRandomArbitrary(min, max) {

    return Math.random() * (max - min) + min;
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent, hoursNum): void {
    this.calendarEvents = this.calendarEvents.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart + hoursNum,
          end: newEnd + hoursNum
        };
      }
      return iEvent;
    });
    this.refreshView();
  }

  refreshView(): void {
    
    this.refresh.next();
  }

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
