import { Component } from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  template: `
    <div id="Cont">
      <h1>Hello, World!</h1>
      <p class="counterVal">Counter: {{ counter }}</p>
      <button (click)="handleClick(+1)">Increment</button>
      <button (click)="handleClick(-counter)">Reset</button>
      <button (click)="handleClick(-1)">Decremnet</button>
    </div>

    <!-- Use GreetingComponent here -->
    <app-greeting></app-greeting>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;

  handleClick(val: number) {
    this.counter += val;
  }
}
