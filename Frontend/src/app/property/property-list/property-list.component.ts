import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-list',
  //template: '<h1> Hi There  This is a SubList</h1>'
  templateUrl: './property-list.component.html',
  //styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      Id: 1,
      Name: 'top Birla House',
      Type: 'House',
      Price: 179000
    },
    {
      Id: 2,
      Name: 'Normal House',
      Type: 'House',
      Price: 119000,
    },
    {
      Id: 3,
      Name: 'Lake Villa',
      Type: 'House',
      Price: 379000,
    },
    {
      Id: 4,
      Name: 'Beach Mansion',
      Type: 'House',
      Price: 579000
    },
    {
      Id: 5,
      Name: 'Ocean Castle',
      Type: 'House',
      Price: 1110000
    },
    {
      Id: 6,
      Name: 'Ram Nivas',
      Type: 'House',
      Price: 179555
    },
    {
      Id: 7,
      Name: 'Zoopadi',
      Type: 'House',
      Price: 17900
    }

  ]

constructor(){}
ngOnInit(): void{   }

}


