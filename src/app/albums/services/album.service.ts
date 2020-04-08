import { Injectable } from '@angular/core';
import { Album } from '../interface/albums-api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {



  constructor(
    private http: HttpClient
  ) { }

  getAlbums(name):Observable<Album[]>{
    return this.http.get<Album[]>(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`)
  }


}
