import { FavoriteChangeArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  isFavourtie = true;
  viewMode = "map";

  tweet = {
    likeCount: 10,
    isActive: true
  }

  courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
  ]

  onFavChange(eventArgs: FavoriteChangeArgs){
    console.log("Facvourite is changed :", eventArgs)
  }
}
