import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { MyContextService } from './my-context.service';
import { ProductInterface } from 'src/assets/mod';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private Context: MyContextService) {}

  ngOnInit(): void {
    this.products = this.Context.getProductsArray();
    initFlowbite();
  }
}
