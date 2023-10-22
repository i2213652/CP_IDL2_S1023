import { Component, OnInit } from '@angular/core';

import { TareaService } from '../tarea.service';
import { Tarea } from '../models/tarea.model';

import { Router } from '@angular/router';

// Usamos la librería SweetAlert 2 para los mensajes emergentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tarea: Tarea = new Tarea();

  constructor(private tareaService: TareaService, private router: Router) {}

  //Método para valores iniciales de la tarea
  ngOnInit() {
    this.tarea.id = this.tareaService.count() + 1; //Para obtener un id simulado y correlativo
    this.tarea.titulo = '';
    this.tarea.descripcion = '';
  }

  //Método para guardar la tarea
  guardarTarea() {
    if (this.tarea.titulo == null || this.tarea.titulo.trim() == '') {
      Swal.fire({
        icon: 'error',
        title: '¡Complete el titulo de la tarea!',
        timer: 1200,
        showConfirmButton: false,
      });
      return false;
    }

    return Swal.fire({
      title: '¿Desea guardar los cambios?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.tareaService.add(this.tarea);
        return this.router.navigate(['/tareas']);
      } else {
        return false;
      }
    });
  }
}
