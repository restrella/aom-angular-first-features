import { Component } from '@angular/core';
import { Blog } from 'src/app/modules/models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogs: Blog[] = [
    {
      title: 'Blog1',
      description: 'My Blog1',
      published: false,
      authorActive: true,
    },
    {
      title: 'Blog2',
      description: 'My Blog2',
      published: true,
      authorActive: false,
    },
    {
      title: 'Blog3',
      description: 'My Blog3',
      published: true,
      authorActive: true,
    },
  ];

  executeAction = (blog: Blog) => {
    console.log('printing from parent ' + blog.description);
  };
}
