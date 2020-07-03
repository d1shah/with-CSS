import  {Component } from '@angular/core';




@Component({
  selector:'app-property-card',
  //template:'<h1> Hi There  This is a Card</h1>',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']



})
export class PropertyCardComponent{

  properties: any =
    {
      Id: 1,
      Name: 'top Birla House',
      Type: 'House',
      Price: 179000
    }

}
