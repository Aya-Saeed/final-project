import { Component, OnInit ,Input} from '@angular/core';
import { MealService } from 'src/app/shared/service/meal.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  meals:Array<any>=[
  {id:1,name:"ayaa",img:'https://picsum.photos/200/400'},
  {id:2,name:"yoyo",img:'https://picsum.photos/500/400'},
  {id:3,name:"aliaa",img:'https://picsum.photos/300/400'}
]
//meal!:any
  @Input() category!:any;
  constructor(private mealService:MealService) { }

  ngOnInit(): void {
    // this.meals=this.mealService.getAll();
    // this.MealService.getAll().subscribe((meals)=>{
//       this.meals=meals
//       this.meals=this.meals.filter((meal:Meal)=>{
//  return meal.cat_id==this.category.id
  }

}
