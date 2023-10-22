import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../tarea.service';
import { Tarea } from '../../models/tarea.model';

// Usamos la librería SweetAlert 2 para los mensajes emergentes
import Swal from 'sweetalert2';

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

  deleteAll() {
    return Swal.fire({
      title: '¿Desea eliminar todos los registros?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.tareaService.deleteAll();
        return (this.tareas = this.tareaService.getAll());
      } else {
        return false;
      }
    });
  }
}
