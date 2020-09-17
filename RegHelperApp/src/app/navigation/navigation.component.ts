import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  links: MenuItem[];

  ngOnInit() {
    this.links = [
      { label: 'Home', routerLink: ['/homeView'], icon: 'pi pi-home' },
      { label: 'Events', routerLink: ['/eventsView'], icon: 'pi pi-th-large' },
      {
        label: 'Calendar',
        routerLink: ['/calendarView'],
        icon: 'pi pi-calendar',
      },
    ];
  }
}
