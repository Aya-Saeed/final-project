import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  meals:Array<any>=[
    "egg","tomato","pizza"
  ]
  @Input() category!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
