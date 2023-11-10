import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    const url = `${environment.apiUrl}/api/tasks`;
    return this.http.get<any[]>(url);
  }
  getById(id: number): Observable<Task> {
    const url = `${environment.apiUrl}/api/tasks/${id}`;
    return this.http.get<Task>(url);
  }

  createTask(data: any) {
    const url = `${environment.apiUrl}/api/tasks`;
    return this.http.post(url, data);
  }

  updateTask(id: number, data: any) {
    const url = `${environment.apiUrl}/api/tasks/${id}`;
    return this.http.put(url, data);
  }

  deleteTask(id: number) {
    const url = `${environment.apiUrl}/api/tasks/${id}`;
    return this.http.delete(url);
  }
}
