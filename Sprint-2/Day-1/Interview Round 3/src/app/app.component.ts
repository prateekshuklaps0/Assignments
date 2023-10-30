import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employess = [
    { name: 'John', salary: 3000, designation: 'developer' },
    { name: 'Emma', salary: 4000, designation: 'manager' },
    { name: 'Kelly', salary: 3500, designation: 'tester' },
  ];
}
