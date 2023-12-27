import { Component } from '@angular/core';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  template: `
    <app-hello-world [text]="parentText"></app-hello-world>
    <app-counter></app-counter>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentText = 'Hello World';
  counter = 0;

  handleClick(val: number) {
    this.counter += val;
  }
}
