import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServicesService {

  constructor() { }

  async getIt() {
    return ((await fetch('../../assets/db.json')).json())
  };
}
