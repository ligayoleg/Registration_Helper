import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { Event } from '../models/event.model';
import { Subject } from '../models/class.model';
import { CarService } from '../carservice';
import { ClassesViewService } from './classes-view.service';
import { MenuItem } from 'primeng/api';
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

  days: any[];

  events: any[];

  //Classes
  cols: any[];
  class: Subject = {};
  selectedClass: Subject;
  newClass: boolean;
  classes: Subject[];

  constructor(
    private carService: CarService,
    private classesService: ClassesViewService
  ) {}

  ngOnInit(): void {
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    this.classes = this.classesService.returnClasses();

    this.days = [
      { label: 'Monday', value: 'mon' },
      { label: 'Tuesday', value: 'tue' },
      { label: 'Wednesday', value: 'wed' },
      { label: 'Thursday', value: 'thu' },
      { label: 'Friday', value: 'fri' },
      { label: 'Saturday', value: 'sat' },
      { label: 'Sunday', value: 'sun' },
    ];

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'days', header: 'Days' },
    ];

    this.events = [{ name: 'Work', type: 'type', days: 'days' }];
  }

  showDialogToAdd() {
    this.newClass = true;
    this.class = {};
    this.displayDialog = true;
  }

  save() {
    // let cars = [...this.cars];
    // if (this.newCar) cars.push(this.car);
    // else cars[this.cars.indexOf(this.selectedCar)] = this.car;

    // this.cars = cars;
    // this.car = null;
    // this.displayDialog = false;
    let classes = [...this.classes];
    if (this.newClass) classes.push(this.class);
    else classes[this.classes.indexOf(this.selectedClass)] = this.class;

    this.classes = classes;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.classes.indexOf(this.selectedClass);
    this.classes = this.classes.filter((val, i) => i != index);
    this.class = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newClass = false;
    this.class = this.cloneClass(event.data);
    this.displayDialog = true;
  }

  cloneClass(c: Subject): Subject {
    var subject = {};
    for (let prop in c) {
      subject[prop] = c[prop];
    }
    return subject;
  }
}
