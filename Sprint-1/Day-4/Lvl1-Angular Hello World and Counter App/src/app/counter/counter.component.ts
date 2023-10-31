import { Component } from '@angular/core';

@Component({
  selector: 'app-reverseString',
  templateUrl:
    '<div><input [(ngModel)]="inputVal" type="text" placeholder="Enter Text" /><br/><button (Click)="handleClick()" >Reverse</button><br/><h1>Reversed String : {{reversedStr}}</h1></div>',
  styleUrls: ['./counter.component.css'],
})
export class ReverseStringComponent {
  inputVal = '';
  reversedStr = '';

  handleClick() {
    this.reversedStr = this.inputVal.split('').reverse().join('');
  }
}
