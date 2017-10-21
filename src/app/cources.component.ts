import {Component} from '@angular/core';

@Component({
    selector: 'cources',
    template: `<h2>{{title}}</h2> 
               <img [src]="imageUrl"/> 
               <br/> 
               <button class="btn btn-primary">Save</button>`
})
export class CourseComponent{
    title="List of cources";
    imageUrl="http://lorempixel.com/400/200/";
    isActive=true;
}