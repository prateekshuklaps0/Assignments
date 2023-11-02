import { Injectable } from '@angular/core';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { ProductInterface } from 'src/assets/mod';
import { productsData } from 'src/assets/productsData';

@Injectable({
  providedIn: 'root',
})
export class MyContextService {
  private productsArray: ProductInterface[] = productsData;
  private sortBy: string = 'price';
  private order: string = 'asc';
  private category: string = 'men';

  changeSortBy(val: string) {
    this.sortBy = val;
  }

  changeOrder(val: string) {
    this.order = val;
  }

  changeCategory(val: string) {
    this.category = val;
  }

  filterProductsByCategory() {
    this.productsArray = productsData.filter(
      (product) => product.category === this.category
    );
  }

  getProductsArray() {
    return this.productsArray;
  }

  getVariables() {
    return { sortBy: this.sortBy, order: this.order, category: this.category };
  }
}
