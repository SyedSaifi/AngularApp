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

  onFavChange(eventArgs: FavoriteChangeArgs){
    console.log("Facvourite is changed :", eventArgs)
  }
}
