import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Enviroment {
  production: boolean;
  apiUrl: string;

  constructor() {
    this.production = false;
    this.apiUrl = '';
  }
}
