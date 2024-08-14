import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from 'src/app/modules/models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input('blogInput') blog: Blog | undefined;

  @Output() actionEmitter = new EventEmitter<Blog>();

  sendAction = () => {
    this.actionEmitter.emit(this.blog);
  };
}
