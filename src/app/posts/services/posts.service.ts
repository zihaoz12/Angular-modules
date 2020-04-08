import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Post } from '../interface/postsAPI.interface';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
    .pipe(map( res => res as Post[]), catchError( err => throwError(new Error(err)))
    )
  }

}
