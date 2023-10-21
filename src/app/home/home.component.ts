import { Component, OnInit } from '@angular/core';

import { TareaService } from '../tarea.service';
import { Tarea } from '../models/tarea.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tarea: Tarea = new Tarea();

  constructor(private tareaService: TareaService) {}
  ngOnInit() {
    this.tarea.id = 0;
    this.tarea.nombre = '';
    this.tarea.descripcion = '';
  }
  guardarTarea() {
    this.tareaService.add(this.tarea);
  }
}
