import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllData(): Observable<any>{
     return this.http.get(USERS_URL);
  }
}
