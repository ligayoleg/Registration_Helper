import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { Class } from '../models/class.model';
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

  //Classes
  cols: any[];
  class: Class = {};
  selectedClass: Class;
  newClass: boolean;
  classes: Class[];

  constructor(
    private carService: CarService,
    private classesService: ClassesViewService
  ) {}

  ngOnInit(): void {
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));

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
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'oncePerWeek', header: 'Once Per Week' },
      { field: 'dayOne', header: 'Day One' },
      { field: 'dayOneTimeStart', header: 'Day One Start Time' },
      { field: 'dayOneTimeFinish', header: 'Day One Finish Time' },
      { field: 'dayTwo', header: 'Day Two' },
      { field: 'dayTwoTimeStart', header: 'Day Two Start Time' },
      { field: 'dayTwoTimeFinish', header: 'Day Two Finish Time' },
    ];

    this.carsCols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
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
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
}
