import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
categories:Array<any>=[
  "cat1","cat2"
]
// categories:Array<any>
  constructor() { }

  ngOnInit(): void {
    // this.CategoryService.getAll().subscribe(categories=>{
    //   this.categories=categories
  }

}
