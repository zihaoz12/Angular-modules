import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumComponent } from './album/album.component';



@NgModule({
  declarations: [AlbumsComponent, AlbumDetailComponent, AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ],
  exports:[
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumComponent
  ]
})
export class AlbumsModule { }
