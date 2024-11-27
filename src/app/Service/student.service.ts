import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface studentRes {
  id: number;
  name: string;
  nic: number;
  course: string;
  contact: number;
  created_at: string;
  updated_at: string;
}
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getStudents() {
    return this.httpClient.get(`http://127.0.0.1:8000/api/show-std`);
  }

  saveStd(inputData: any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/store-std/`,inputData);
  }
  getStdByID(ID: number) {
    return this.httpClient.get<any[]>(`http://127.0.0.1:8000/api/show-std-byID/${ID}`);
  }
  updateStudent(ID: number, studentData: any) {
    return this.httpClient.put(`http://127.0.0.1:8000/api/update-std/${ID}`, studentData);
  }
  deleteStdByID(id: number) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/delete-std/${id}`);
  }
  
}
