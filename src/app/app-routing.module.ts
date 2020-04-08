import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'posts',
        loadChildren: ()=>import('./posts/posts.module').then( m => m.PostsModule)
    },
    {
        path:'',
        redirectTo: '/home',
        pathMatch:'full'
    },
    {
        path:'form',
        loadChildren: ()=>import('./form/form.module').then(m => m.FormModule)
    },
    {
        path:'albums',
        loadChildren: ()=>import('./albums/albums.module').then(m => m.AlbumsModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
