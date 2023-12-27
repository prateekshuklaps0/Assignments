import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  obj: any = {};

  constructor(private Context: DataService) {}

  ngOnInit() {
    this.obj = this.Context.getValues();
  }
}
