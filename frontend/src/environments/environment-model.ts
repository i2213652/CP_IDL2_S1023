import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Enviroment {
  production: boolean;
  apiUrl: string;

  // Modo Desarrollo ----------------------------------------------------------------

  constructor() {
    this.production = false;
    this.apiUrl = '';
  }

  // Modo Producción ----------------------------------------------------------------

  // constructor() {
  //   this.production = true;
  //   this.apiUrl = '';
  // }
}
