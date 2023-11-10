import { Component, OnInit } from '@angular/core';

import { TaskService } from '../core/services/task.service';
import { Task } from '../models/task';

import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

// Usamos la librería SweetAlert 2 para los mensajes emergentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  task: Task = new Task();

  constructor(private taskService: TaskService, private router: Router) {}

  //Método para valores iniciales de la tarea
  ngOnInit() {
    this.task.title = '';
    this.task.description = '';
    this.task.completed = false;
  }

  //Método para guardar la tarea
  saveTask() {
    if (this.task.title == null || this.task.title.trim() == '') {
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
        const data = {
          title: this.task.title,
          description: this.task.description,
        };

        this.taskService.createTask(data).subscribe((data: any) => {
          console.log(data);
        });

        return this.router.navigate(['/tasks']);
      } else {
        return false;
      }
    });
  }
}
