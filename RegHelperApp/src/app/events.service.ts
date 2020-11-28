import { Injectable } from '@angular/core';

import {CalendarEvent} from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: CalendarEvent[] = [
    {
      // First Event
      title: 'Event # 1',
      start: new Date("November 03, 2020 08:00:00"),
      draggable: true,
      end: new Date("November 03, 2020 09:00:00"), // an end date is always required for resizable events to work
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true,
      },
      meta: "type#1",
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
    {
      // Second Event
      title: 'Event # 2',
      start: new Date("October 26, 2020 07:00:00"),
      draggable: true,
      end: new Date("October 26, 2020 09:00:00"), // an end date is always required for resizable events to work
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

  constructor() { }

  getEvents(){
    return this.events;
  }

  updEvents(events){
    console.log(events);
    this.events = events;

  }
}
