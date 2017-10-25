import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likeCount') likeCount: number;
  @Input('isActive') isActive: boolean; 

  onClick() {
    this.likeCount += (this.isActive) ? -1:1;
    this.isActive=!this.isActive;
  }

}
