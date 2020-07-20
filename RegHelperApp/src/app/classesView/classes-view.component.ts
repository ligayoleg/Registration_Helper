import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-view',
  templateUrl: './classes-view.component.html',
  styleUrls: ['./classes-view.component.scss']
})
export class ClassesViewComponent implements OnInit {

  addedClasses;

  days: any[];
  constructor() { }

  ngOnInit(): void {
    this.days = [
      {label: "Monday", value: "mon"},
      {label: "Tuesday", value: "tue"},
      {label: "Wednesday", value: "wed"},
      {label: "Thursday", value: "thu"},
      {label: "Friday", value: "fri"},
      {label: "Saturday", value: "sat"},
      {label: "Sunday", value: "sun"},
    ]
  }

}
