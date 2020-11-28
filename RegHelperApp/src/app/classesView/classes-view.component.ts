import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../car';

import { Subject, Event, Day } from '../models/class.model';
import { CarService } from '../carservice';
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

  car: Car = {};
  selectedCar: Car;
  newCar: boolean;
  cars: Car[];
  carsCols: any[];

  days: SelectItem[];
  selecteddays: string []=[];

  //Classes
  cols: any[];


  // events
  event: CalendarEvent;
  selectedEvent: CalendarEvent;
  events: CalendarEvent[] = [
    // {
    //   // First Event
    //   title: 'Class # 1',
    //   start: this.dateOne,
    //   draggable: true,
    //   end: addDays(new Date(), 1), // an end date is always required for resizable events to work
    //   resizable: {
    //     beforeStart: true, // this allows you to configure the sides the event is resizable from
    //     afterEnd: true,
    //   },
    // },
    // {
    //   // Another event
    //   title: 'A non draggable event',
    //   start: new Date(),
    // },
  ];
  newEvent: boolean;

  constructor(
    private _eventsService: EventsService,
    private classesService: ClassesViewService
  ) {

    // get events from eventsService
    this.events = _eventsService.getEvents();
  }

  ngOnInit(): void {
    //this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    //this.classes = this.classesService.returnClasses();

    this.days = [
      { label: 'S', value: 'sun' },
      { label: 'M', value: 'mon' },
      { label: 'T', value: 'tue' },
      { label: 'W', value: 'wed' },
      { label: 'T', value: 'thu' },
      { label: 'F', value: 'fri' },
      { label: 'S', value: 'sat' },
    ];

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'days', header: 'Days' },
    ];


  }

  showDialogToAdd() {
    this.newEvent = true;
    this.event = { start: new Date(), title: '' };
    this.displayDialog = true;
  }

  save() {
    // let cars = [...this.cars];
    // if (this.newCar) cars.push(this.car);
    // else cars[this.cars.indexOf(this.selectedCar)] = this.car;

    // this.cars = cars;
    // this.car = null;
    // this.displayDialog = false;
    let events = [...this.events];
    if (this.newEvent) events.push(this.event);
    else events[this.events.indexOf(this.selectedEvent)] = this.event;

    this.events = events;

    this._eventsService.updEvents(this.events);
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.events.indexOf(this.selectedEvent);
    this.events = this.events.filter((val, i) => i != index);
    this.event = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newEvent = false;
    this.event = this.cloneClass(event.data);
    this.displayDialog = true;
  }

  cloneClass(c: CalendarEvent): CalendarEvent {
    var event = { title: '', start: new Date() };
    for (let prop in c) {
      event[prop] = c[prop];
    }
    return event;
  }
}
