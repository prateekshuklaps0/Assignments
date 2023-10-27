import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
    <div>
      <label for="greetingMessage">Edit Greeting: </label>
      <input [(ngModel)]="greetingMessage" id="greetingMessage" />
      <p>Greeting: {{ greetingMessage }}</p>
    </div>
  `,
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent {
  greetingMessage = 'Greetings from Prateek';
}
