import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-meals',
  templateUrl: './menu-meals.component.html',
  styleUrls: ['./menu-meals.component.css']
})
export class MenuMealsComponent implements OnInit {

  @Input() mymeal!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
