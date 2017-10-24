import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseComponent } from "./course/courses.component";
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
