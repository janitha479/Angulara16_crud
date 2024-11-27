import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface studentRes {
  "id": number
  "name": string
  "nic": number
  "course": string
  "contact": number
  "created_at": string
  "updated_at": string



}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(){
    return  this.httpClient.get(`http://127.0.0.1:8000/api/show-std`);

  }

  saveStd(inputData: any){
    return  this.httpClient.post(`http://127.0.0.1:8000/api/store-std/`, inputData);
  }


}
