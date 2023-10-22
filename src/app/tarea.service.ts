import { Injectable } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Injectable({
  providedIn: 'root',
})

// Usamos inyección de dependencias para compartir la información entre los componentes
export class TareaService {
  private tareas: Tarea[] = [];

  getAll(): Tarea[] {
    return this.tareas;
  }

  count(): number {
    return this.tareas.length;
  }

  add(item: Tarea) {
    return this.tareas.push(item);
  }

  deleteAll() {
    return (this.tareas = []);
  }
}
