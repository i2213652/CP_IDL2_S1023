import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

import { Router, ActivatedRoute } from '@angular/router';

// Usamos la librería SweetAlert 2 para los mensajes emergentes
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  task: Task = new Task();
  mode!: string;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //Método para valores iniciales de la tarea
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.mode = params['mode'];

      if (this.mode == 'EDIT') {
        let task_id = params['task_id'];

        this.taskService.getById(task_id).subscribe({
          next: (data) => {
            this.task = data;
          },
          error: (e) => console.error(e),
        });
      } else {
        this.mode = 'NEW';

        this.task.title = '';
        this.task.description = null;
        this.task.completed = false;
      }
    });
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

    let message = null;

    if (this.mode == 'NEW') {
      message = '¿Desea crear esta nueva tarea?';
    } else {
      message = '¿Desea actualizar los datos de esta tarea?';
    }

    return Swal.fire({
      title: message,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        const id = this.task.id;

        const task = {
          title: this.task.title,
          description: this.task.description,
        };

        if (this.mode == 'EDIT') {
          return this.taskService
            .updateTask(id, task)
            .subscribe((data: any) => {
              this.router.navigate(['/tasks']);
            });
        } else if (this.mode == 'NEW') {
          return this.taskService.createTask(task).subscribe((data: any) => {
            this.router.navigate(['/tasks']);
          });
        }

        return task;
      } else {
        return false;
      }
    });
  }

  clean(): void {
    Swal.fire({
      title: '¿Desea cancelar la edición de la tarea?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        return this.router.navigate(['/']);
      } else {
        return false;
      }
    });
  }
}
