import { Injectable } from '@angular/core';

import {CalendarEvent} from 'angular-calendar';

import {Event} from './models/event.model';
import { RRule } from 'rrule';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: CalendarEvent[] = [
    {
      // First Event
      title: 'Event # 1',
      start: new Date(),
      draggable: true,
      end: new Date(), // an end date is always required for resizable events to work
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true,
      },
      meta: "type#1",
      
    },
    {
      // Second Event
      title: 'Event # 2',
      start: new Date(),
      draggable: true,
      end: new Date(), // an end date is always required for resizable events to work
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true,
      },
      meta: "type#2",
      // actions: [
      //   {label: "Monday", onClick(e){console.log(e);}},
      //   {label: "Monday", onClick(e){console.log(e);}},
      //   {label: "Tuesday", onClick(e){console.log(e);}},
      //   {label: "Wednesday", onClick(e){console.log(e);}},
      //   {label: "Thursday", onClick(e){console.log(e);}},
      //   {label: "Friday", onClick(e){console.log(e);}},
      //   {label: "Saturday", onClick(e){console.log(e);}},
      // ],
    },
  ];


  eventsTwo: Event[] = [
    { 
      title: "Work",
      type: "Work",
      locked: true,
      recurring: true,
      days: [
        {title:  `Work - Day 1`, start: new Date()},
        {title:  `Work - Day 2`, start: this.updateDates(1)},
        {title:  `Work - Day 3`, start: this.updateDates(24)},
      ],
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]

      }
    },
    { 
      title: "Gym",
      type: "Work out",
      locked: true,
      recurring: true,
      days: [
        {title:  `Gym - Day 1`, start: this.updateDates(5)},
        {title:  `Gym - Day 2`, start: this.updateDates(7)},
        {title:  `Gym - Day 3`, start: this.updateDates(9)},
      ],
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]

      }
    }
  ]
  constructor() { }

  getEvents(){
    return this.eventsTwo;
  }

  updateDates(addedHrs){  
    const myDate = new Date();
    const newDate = new Date(myDate);
    newDate.setHours(newDate.getHours() + addedHrs);
    return newDate;
  }

  
}
