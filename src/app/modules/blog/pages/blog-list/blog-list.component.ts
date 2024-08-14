import { Component } from '@angular/core';
import { Blog } from 'src/app/modules/models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  isCard = false;

  width = '150px';
  height = '200';
  color = 'yellow';
  num = 0;
  numArrayIndex = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
  ];
  numArray = [1, 2, 3, 4, 5, 6, 7, 8];
  blogs: Blog[] = [
    {
      title: 'Blog1',
      description: 'My Blog1',
      published: true,
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
      published: false,
      authorActive: true,
    },
  ];

  executeAction = (blog: Blog, index: number) => {
    console.log(
      'printing from parent ' + blog.description + ' with index: ' + index
    );
  };

  incrementNumber = () => {
    this.num++;
  };

  changeCss = () => {
    this.width = '200px';
    this.height = '200px';
    this.color = 'blue';
  };

  toggleClass = () => {
    this.isCard = !this.isCard;
  };
}
