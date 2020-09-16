import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  links: MenuItem[];

  ngOnInit() {
      this.links = [
          {label: 'Home', routerLink: ['/homeView']},
          {label: 'Events', routerLink: ['/eventsView']},
          {label: 'Calendar', routerLink: ['/calendarView']},
      ];
  }

}
