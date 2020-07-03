import  {Component, Input } from '@angular/core';




@Component({
  selector:'app-property-card',
  //template:'<h1> Hi There  This is a Card</h1>',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']



})
export class PropertyCardComponent{

@Input() property :any




}
