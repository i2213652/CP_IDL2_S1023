import { Injectable } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  constructor() {}

  private tareas: Tarea[] = [];

  getAll(): Tarea[] {
    return this.tareas;
  }

  add(item: Tarea) {
    this.tareas.push(item);
  }
}
