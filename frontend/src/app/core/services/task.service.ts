import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { ProblemaDetails } from 'src/app/models/problema-details.models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll() {
    const url = `${environment.apiUrl}/api/tasks`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  createTask(data: any) {
    const url = `${environment.apiUrl}/api/tasks`;
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  updateTask(id: number, data: any) {
    const url = `${environment.apiUrl}/api/tasks/${id}`;
    return this.http.put(url, data).pipe(catchError(this.handleError));
  }

  deleteTask(id: number) {
    const url = `${environment.apiUrl}/api/tasks/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let response: ProblemaDetails = new ProblemaDetails();
    try {
      if (error.status === 0) {
        response.status = 500;
        response.title = 'Revise su conexión de internet.';
        response.detail = 'Error al conectar al servidor';
        return throwError(response);
      } else {
        return throwError(error.error);
      }
    } catch (e) {
      return throwError(error);
    }
  }
}
