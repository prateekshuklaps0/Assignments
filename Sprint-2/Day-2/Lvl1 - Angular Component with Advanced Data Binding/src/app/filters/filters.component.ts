import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { MyContextService } from '../my-context.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  sortBy: string = 'price';
  order: string = 'asc';
  category: string = 'men';

  constructor(private Context: MyContextService) {}

  ngOnInit(): void {
    this.sortBy = this.Context.getVariables().sortBy;
    this.order = this.Context.getVariables().order;
    this.category = this.Context.getVariables().category;
  }

  changeSortBy(val: string) {
    this.sortBy = val;
    this.Context.changeSortBy(this.sortBy);
  }

  changeOrder(val: string) {
    this.order = val;
    this.Context.changeOrder(this.order);
  }

  changeCategory(val: string) {
    this.category = val;
    this.Context.changeCategory(this.category);

    this.Context.filterProductsByCategory();
  }
}
