import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello, World!</h1>
      <p>Counter: {{ counter }}</p>
      <button (click)="incrementCounter()">Increment</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;

  incrementCounter() {
    this.counter++;
  }
}
