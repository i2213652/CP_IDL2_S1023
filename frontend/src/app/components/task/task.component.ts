import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

// Usamos la librería SweetAlert 2 para los mensajes emergentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks?: any[];

  submited = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('oki');
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.tasks = data;
      },
      error: (e) => console.error(e),
    });
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
