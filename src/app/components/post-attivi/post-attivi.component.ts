import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsServicesService } from 'src/app/services/posts.services.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  posts!: Post[];

  constructor(private postsSrv: PostsServicesService) {

  }

  ngOnInit(): void {
    this.postsSrv.getIt().then((data) => {
      this.posts = data;
      console.log(this.posts);

    });
  }
  disable(post:Post) {
    post.active = false;
  }

}
