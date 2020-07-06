import {Component} from '@angular/core';

@Component({
selector:'app-property-card',
//template:'<h1>HELLO this is Card</h1>',


templateUrl:'property-card.component.html',
styleUrls:['property-card.component.css']

})

export class PropertyCardComponent{

  property: any = {
    "Id":1,
    "Type":"House",
    "Name":"Birla House",
    "Price":179000
  }

}
