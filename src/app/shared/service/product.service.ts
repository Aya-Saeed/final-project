import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CategoryService } from "./category.service";

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
    console.log(this.cartArray)
    this.cartArray.push(product);
    const res=this.cartArray;
    console.log(res);
    return res;
  }
}