import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../tarea.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent implements OnInit {
  tareas!: Tarea[];
  constructor(private tareaService: TareaService) {}

  //Método para listar las tareas registradas
  ngOnInit() {
    this.tareas = this.tareaService.getAll();
  }
}
