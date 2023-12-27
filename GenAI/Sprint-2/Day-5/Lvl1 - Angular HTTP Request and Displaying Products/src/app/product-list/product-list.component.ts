import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  obj: any = {};

  constructor(public http: HttpClient, public Context: DataService) {}

  getData() {
    this.Context.loading();
    return this.http.get('https://fakestoreapi.com/products').subscribe(
      (data) => {
        console.log(data);
        return this.Context.success(data);
      },
      (err) => {
        console.log(err);
        this.Context.error('Something Went Wrong');
      }
    );
  }

  ngOnInit(): void {
    this.obj = this.Context.getValues();

    console.log(this.getData());
  }
}
