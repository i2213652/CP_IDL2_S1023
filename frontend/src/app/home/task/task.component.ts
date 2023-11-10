import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../models/task';

// Usamos la librería SweetAlert 2 para los mensajes emergentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks!: Task[];
  constructor(private taskService: TaskService) {}

  //Método para listar las tareas registradas
  ngOnInit() {
    console.log('oki');
    this.taskService.getAll().subscribe(
      (data: any) => {
        console.log(data);
        this.tasks = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // deleteAll() {
  //   return Swal.fire({
  //     title: '¿Desea eliminar todos los registros?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Si',
  //     cancelButtonText: 'No',
  //   }).then((result) => {
  //     if (result.value) {
  //       this.taskService.deleteAll();
  //       return (this.tasks = this.taskService.getAll());
  //     } else {
  //       return false;
  //     }
  //   });
  // }
}
