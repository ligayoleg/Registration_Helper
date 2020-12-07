import { Component, OnInit, Input } from '@angular/core';

import {Event, RecurringEvent} from '../models/event.model';
import { ClassesViewService } from './classes-view.service';
import { MenuItem } from 'primeng/api';

import {SelectItem} from 'primeng/api';

import {EventsService} from '../events.service';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import RRule from 'rrule';

@Component({
  selector: 'app-classes-view',
  templateUrl: './classes-view.component.html',
  styleUrls: ['./classes-view.component.scss'],
})

export class ClassesViewComponent implements OnInit {

  displayDialog: boolean;
  selectedOption: string[]= [];
  
  carsCols: any[];

  days: SelectItem[];
  selecteddays: string []=[];

  //Classes
  cols: any[];


  // events
  event: Event;
  selectedEvent: Event;
  events: Event[];
  eventDates: CalendarEvent[];

  selectedRecurringEvent: RecurringEvent;
  recurringEvent: RecurringEvent;
  recurringEvents: RecurringEvent[];
  newEvent: boolean;

  constructor(
    private _eventsService: EventsService,
   
  ) {

    // get events from eventsService
    this.events = _eventsService.getEvents();
    this.recurringEvents = _eventsService.recurringEvents;
    console.log(this.recurringEvents);
    console.log(this.events);
  }

  ngOnInit(): void {
    this.events.forEach(event => {
      this.eventDates = event.days;
      
      this.eventDates.forEach(ed => {
        ed.meta = ed.start.getDay();
      })
    })
 

    this.days = [
      { label: 'S', value: 'SU'  },
      { label: 'M', value: 'MO'  },
      { label: 'T', value: 'TU'  },
      { label: 'W', value: 'WE'  },
      { label: 'T', value: 'TH'  },
      { label: 'F', value: 'FR'  },
      { label: 'S', value: 'SA'  },
    ]; 
    
    this.recurringEvents.forEach(event=>{
      event.rrule.byweekday.forEach(day =>{
        this.selectedOption.push(day);
      })
    })
 
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'days', header: 'Days' },
    ];


  }

  showDialogToAdd() {
    this.newEvent = true;
    this.recurringEvent = { title: '', rrule: {freq: 2} };
    this.displayDialog = true;
  }

  save() {
    let events = [...this.recurringEvents];
    if (this.newEvent) events.push(this.recurringEvent);
    else events[this.recurringEvents.indexOf(this.selectedRecurringEvent)] = this.recurringEvent;

    this.recurringEvents = events;

    this._eventsService.recurringEvents = events;
    this.event = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.events.indexOf(this.selectedEvent);
    this.events = this.events.filter((val, i) => i != index);
    this.event = null;
    this.displayDialog = false;
  }

  // onRowSelect(event) {
  //   this.newEvent = false;
  //   this.event = this.cloneClass(event.data);
  //   this.displayDialog = true;
  // }

  cloneClass(c: Event): Event {
    var event = { title: '', start: new Date() };
    for (let prop in c) {
      event[prop] = c[prop];
    }
    return event;
  }
}
