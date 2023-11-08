import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getSomeData() {
    const url = `${environment.apiUrl}/api`;
    return this.http.get(url);
  }

  createResource(data: any) {
    const url = `${environment.apiUrl}/api`;
    return this.http.post(url, data);
  }

  updateResource(id: number, data: any) {
    const url = `${environment.apiUrl}/api/${id}`;
    return this.http.put(url, data);
  }

  deleteResource(id: number) {
    const url = `${environment.apiUrl}/api/${id}`;
    return this.http.delete(url);
  }
}
