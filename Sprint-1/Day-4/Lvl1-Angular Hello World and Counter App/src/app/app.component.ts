import { Component } from '@angular/core';

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
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;

  handleClick(val: number) {
    this.counter += val;
  }
}
