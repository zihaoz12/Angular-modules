import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostsRoutingModule } from './postsRouting.module';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from '../posts/services/posts.service';
import { CommentsComponent} from './components/comments/comments.component';



@NgModule({
  declarations: [PostsComponent, CommentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
  ],
  providers:[],
  exports: [
    PostsComponent
  ]

})
export class PostsModule { }
