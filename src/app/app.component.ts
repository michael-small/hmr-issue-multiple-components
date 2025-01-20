import { Component, VERSION } from '@angular/core';
import { Comment, CommentComponent} from './comment.component.';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <a href="https://github.com/angular/angular/issues/59632" target="_blank">HMR Breaks nested components #59632</a>
    <app-comment [comment]="comment" />

    {{version.full}}
  `,
  styleUrl: './app.component.scss',
  imports: [CommentComponent],
})
export class AppComponent {
  version = VERSION;

  comment: Comment = {
    id: 1,
    author: 'author1',
    text: 'text here1',
    children: [
        {
            id: 2,
            author: 'author2',
            text: 'text here2'
        },
        {
            id: 2,
            author: 'author3',
            text: 'text here3'
        }
    ]
  }
}
