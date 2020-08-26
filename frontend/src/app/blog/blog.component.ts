import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Blog} from '../Interfaces/blog';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: Blog[] = [];
  id: number;
  blogNum: string;


  constructor(private blogService: BlogService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogNum = this.route.snapshot.paramMap.get('id');
    console.log('blog number: ' + this.blogNum);
    this.id = Number(this.blogNum);
    // this.blog = { idBlog: 0, Title: '', Content: 'g gfagh fdgh
    // faskhdf khksaf dghfas ghs fdj staj djas', Name: '', Image: '', Description: ''};
    console.log('this is the id: ' + this.id );
    this.getBlog(this.id);
  }

  getBlog(id): void  {
    this.blogService.getOneBlog(this.id)
    .subscribe(res => this.blog = res);
    // console.log(this.blogService.getOneBlog(4));
    console.log('id from component: ' + this.id);
    console.log('blog components: ' + this.blog);
  }

}
