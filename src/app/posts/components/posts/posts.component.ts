import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interface/postsAPI.interface';
import { Comments } from '../../interface/commentsAPI.interface';
import { CommentsService } from '../../services/comments.service';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  comments: Comments[] = [];


  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    console.log("Posts Component")
  }

  getPosts():void{
    console.log("Get Posts")
    this.postsService.getPosts().subscribe( data =>
      this.posts = data
    )
  }

  clearPosts(){
    console.log("Clear Posts");
    this.posts = []
  }


  showComments(id){
    console.log('show comments')
    this.commentsService.getComments(id).subscribe( data => {
      this.comments = data;
      this.modalService.showModal('comments-modal')
    })
  }
}
