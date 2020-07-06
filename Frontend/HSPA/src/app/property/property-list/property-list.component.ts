import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [

 {
    "Id": 1,
    "Type": "House",
    "Name": "Birla House",
    "Price": 179000
  },

    {
      "Id": 2,
      "Type": "House",
      "Name": "Ambama House",
      "Price": 279000
    },

    {
      "Id": 3,
      "Type": "House",
      "Name": "good House",
      "Price": 379000
    },

    {
      "Id": 4,
      "Type": "House",
      "Name": "Better House",
      "Price": 479000
    },

    {
      "Id": 5,
      "Type": "House",
      "Name": "Super House",
      "Price": 579000
    }

    ]

  constructor() { }

  ngOnInit(): void {
  }

}
