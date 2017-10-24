import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  @Input('isFavourite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onclick(){
    this.isSelected = !this.isSelected;
    this.click.emit({value:this.isSelected})
  }
}

export interface FavoriteChangeArgs{
   value: boolean
}

