import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../carservice';
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

  cols: any[];

  days: any[];

  constructor(private carService: CarService) {}

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
      { field: 'number', header: 'Number' },
      { field: 'name', header: 'Name' },
      { field: 'section', header: 'Section' },
      { field: 'oncePerWeek', header: 'Once Per Week' },
      { field: 'dayOne', header: 'Day One' },
      { field: 'timeStartOne', header: 'Time Start' },
      { field: 'timeFinishOne', header: 'Time Finish' },
      { field: 'dayTwo', header: 'Day Two' },
      { field: 'timeStartTwo', header: 'Time Start' },
      { field: 'timeFinishTwo', header: 'Time Finish' },
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar) cars.push(this.car);
    else cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
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
