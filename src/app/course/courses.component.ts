import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `<div (click)="onDivClick()">
               <img [src]="imageUrl"/> 
               <h2>{{title}}</h2> 
               <br/>
               <input [(ngModel)]="name" (keyup.enter)="onKeyUp()" [appInputFormat]="'uppercase'"/>
               <br/> 
               <br/>
               <button (click)="onClick($event)" class="btn btn-primary">Save</button>
               <br/>
               <br/>
               <h1>{{summaryText | Summary:20}}</h1>`
})
export class CourseComponent{
    title="Enter courses name";
    imageUrl="http://lorempixel.com/400/200/";
    isActive=true;
    name="";
    summaryText="The summary should be very short. It should contains max 20 letters";

    onKeyUp(){
        console.log("Enter was pressed. The value is ",this.name)
    }
    onDivClick(){
        console.log("Div was clicked");
    }

    onClick($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }
}