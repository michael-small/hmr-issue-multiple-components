import { Component, Input } from '@angular/core';

export interface Comment {
    id: number;
    author: string;
    text: string;
    children?: Comment[];
  }

@Component({
  selector: 'app-comment',
  template: `
    <div class="comment">
      <div class="comment-content">
        <strong>{{ comment.author }}</strong>: {{ comment.text }}
      </div>

      <div class="comment-children">
          <!-- THIS IS NOT RENDERED -->
         @for (children of comment.children; track children.id) {
          <app-comment [comment]="children" />
         }
      </div>
    </div>
  `,
  styles: [
    `
      .comment {
        margin: 10px 0;
        padding-left: 20px;
        border-left: 2px solid #ccc;
      }
      .comment-content {
        margin-bottom: 5px;
      }
      .comment-children {
        margin-top: 10px;
      }
    `,
  ],
})
export class CommentComponent {
    @Input() comment!: Comment;
}
