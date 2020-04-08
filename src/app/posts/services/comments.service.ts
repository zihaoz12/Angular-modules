import { Injectable } from '@angular/core';

import { Comments } from '../interface/commentsAPI.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(postId):Observable<Comments[]>{
    return this.http.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  }
}
