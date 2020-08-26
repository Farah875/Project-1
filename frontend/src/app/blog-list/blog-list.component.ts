import { Component, OnInit } from '@angular/core';
import {Blog} from '../Interfaces/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogList: Blog[] = [];

  constructor( private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogList();
  }

  getBlogList(): void {
    this.blogService.getAll()
    .subscribe(res => this.blogList = res.slice(0, 4));
  }

}
