import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../model/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent  implements OnInit{
  posts: Post[] = [];
  error : string = '';
  constructor(private postService: PostService) {}

  getPosts(): void {
    this.postService.getPosts().subscribe({
      next: (post) => (this.posts = post),
      error: (error) => this.error = error,
    });
  }
  ngOnInit(): void {
    this.getPosts();
  }
}
