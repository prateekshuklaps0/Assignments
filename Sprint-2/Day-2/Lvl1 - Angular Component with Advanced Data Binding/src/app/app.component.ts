import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { productsData } from 'src/assets/productsData';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = productsData;

  ngOnInit(): void {
    initFlowbite();
  }
}
