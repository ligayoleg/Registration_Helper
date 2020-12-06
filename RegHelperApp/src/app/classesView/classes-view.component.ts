import { Component, OnInit, Input } from '@angular/core';

import {Event} from '../models/event.model';
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

@Component({
  selector: 'app-classes-view',
  templateUrl: './classes-view.component.html',
  styleUrls: ['./classes-view.component.scss'],
})

export class ClassesViewComponent implements OnInit {

  displayDialog: boolean;
  selectedOption: string;
  
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
  newEvent: boolean;

  constructor(
    private _eventsService: EventsService,
    
  ) {

    // get events from eventsService
    this.events = _eventsService.getEvents();
  }

  ngOnInit(): void {
    this.events.forEach(event => {
      this.eventDates = event.days;
      
      this.eventDates.forEach(ed => {
        ed.meta = ed.start.getDay();
      })
    })
    console.log(this.eventDates);
    

    this.days = [
      { label: 'S', value: 0, disabled: true  },
      { label: 'M', value: 1, disabled: true  },
      { label: 'T', value: 2, disabled: true  },
      { label: 'W', value: 3, disabled: true  },
      { label: 'T', value: 4, disabled: true  },
      { label: 'F', value: 5, disabled: true  },
      { label: 'S', value: 6, disabled: true  },
    ]; 
 
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'days', header: 'Days' },
    ];


  }

  showDialogToAdd() {
    this.newEvent = true;
    this.event = { title: '' };
    this.displayDialog = true;
  }

  save() {
    let events = [...this.events];
    if (this.newEvent) events.push(this.event);
    else events[this.events.indexOf(this.selectedEvent)] = this.event;

    this.events = events;

    // this._eventsService.updEvents(this.events);
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
