import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { Meal } from '../model/meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  ItemAdded:EventEmitter <Meal> = new EventEmitter<Meal>();
  meals: Array<Meal> = [
    {
      name: 'meal1',
      id: 1,
      img: 'https://picsum.photos/200/400',
    },
    {
      name: 'meal2',
      id: 2,
      img: 'https://picsum.photos/400/300',
    },
    {
      name: 'meal3',
      id: 3,
      img: 'https://picsum.photos/200/500',
    },
  ];
  cartArray:Meal[]=[];
  getAll() {
    return this.meals;
  }
  getMealById(id: number) {
    return this.meals.find((i) => i.id === id);
  }
  additemtochart(product:Meal):Meal[]{
    var index =this.cartArray.findIndex(x => x.id == product.id)
    if (index === -1) {
      this.cartArray.push(product)}; 
    const res=this.cartArray;
    console.log(res);
    return res;
  
} 
  // constructor(private http:HttpClient) {}
  
}
// SelectedMeal!: Meal;
// getAll() {
//   return this.Http.get<Meal>('http://localhost:8000/api/meals');
// }
// displayMeals(meal: Meal) {
//   this.SelectedMeal = meal;
// }
// getMealById() {
//   return this.Http.get<Meal>(
//     `http://localhost:8000/api/meals/${this.SelectedMeal.id}`
//   );
// }