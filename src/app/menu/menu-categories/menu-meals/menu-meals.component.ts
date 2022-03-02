import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/model/meal';
import { MealService } from 'src/app/shared/service/meal.service';

@Component({
  selector: 'app-menu-meals',
  templateUrl: './menu-meals.component.html',
  styleUrls: ['./menu-meals.component.css']
})
export class MenuMealsComponent implements OnInit {

  favourites:any;
  // array!:Meal;
  // array=[];
  array!:Array<Meal>;
  @Input() mymeal!:any;
  constructor(private mealService:MealService) { }

  ngOnInit(): void {
  //  this.mymeal=this.mealService.meals
  //  console.log(this.mymeal.name)
    // console.log(this.array);
  }
  getmeal(mymeal:any)
  {
   
    console.log(mymeal.id);
   this.mealService.additemtochart(this.mymeal)
  // console.log(this.favourites);
  }

}
