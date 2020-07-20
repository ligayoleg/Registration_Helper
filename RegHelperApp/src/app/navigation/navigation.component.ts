import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  views: MenuItem[];

  ngOnInit() {
      this.views = [
          {label: 'Home', routerLink: ['/homeView']},
          {label: 'Classes', routerLink: ['/classView']},
      ];
  }

}
