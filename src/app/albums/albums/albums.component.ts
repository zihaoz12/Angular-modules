import { Component, OnInit } from '@angular/core';
import {  Album } from '../interface/albums-api';
import { AlbumService } from '../services/album.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:any = [];

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {

  }

  getSongsByName(name){
    if(name == ''){
      return false
    }else{
      this.albumService.getAlbums(name).subscribe( data => {
        this.albums = data;
        console.log(this.albums)
      })
    }
  }

}
