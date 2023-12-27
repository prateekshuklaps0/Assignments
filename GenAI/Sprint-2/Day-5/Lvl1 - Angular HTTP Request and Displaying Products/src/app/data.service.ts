import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: any = [];
  private isLoading: boolean = false;
  private isError: boolean = false;
  private errorMsg: string = '';

  loading() {
    this.isLoading = true;
    this.isError = false;
    this.errorMsg = '';
  }

  error(msg: string) {
    this.isLoading = false;
    this.isError = true;
    this.errorMsg = msg;
  }

  success(products: any) {
    this.isLoading = false;
    this.products = products;
  }

  getValues() {
    return {
      products: this.products,
      isLoading: this.isLoading,
      isError: this.isError,
      errorMsg: this.errorMsg,
    };
  }
}
