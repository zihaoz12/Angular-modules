import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../../interface/commentsAPI.interface'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments:Comments[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
