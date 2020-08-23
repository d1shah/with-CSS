import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-addProperty',
  templateUrl: './addProperty.component.html',
  styleUrls: ['./addProperty.component.css']
})
export class AddPropertyComponent implements OnInit {
  public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }
  //constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
