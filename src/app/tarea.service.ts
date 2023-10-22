import { Injectable } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private tareas: Tarea[] = [];

  getAll(): Tarea[] {
    return this.tareas;
  }

  count(): number {
    return this.tareas.length;
  }

  add(item: Tarea) {
    this.tareas.push(item);
  }
}
