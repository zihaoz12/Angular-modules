import { Injectable } from '@angular/core';
import { User } from '../interface/usersAPI.interface'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "https://jsonplaceholder.typicode.com/users";
  constructor(
    private http: HttpClient
  ) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.userURL}`)
  }

  postUser(user:User):Observable<any>{
    return this.http.post<any>(`${this.userURL}`,user)
  }
}
