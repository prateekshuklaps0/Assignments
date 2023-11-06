import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: any[] = [];

  constructor() {}

  addPost(data: any) {
    this.posts = [...this.posts, data];
    this.storeData();
  }

  deletePost(id: number) {
    this.posts = [...this.posts].filter((item: any) => item.id != id);
    this.storeData();
  }

  async storeData() {
    localStorage.setItem('Posts', JSON.stringify(this.posts));
  }

  async getData() {
    let data: any = localStorage.getItem('Posts');
    this.posts = JSON.parse(data);
  }
}
