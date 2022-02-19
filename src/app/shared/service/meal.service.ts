import { Injectable } from '@angular/core';
import { Meal } from '../model/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  meals: Array<Meal> = [
    {
      name: 'meal1',
      id: 1,
      img: 'https://picsum.photos/200/300',
    },
    {
      name: 'meal2',
      id: 2,
      img: 'https://picsum.photos/200/300',
    },
    {
      name: 'meal3',
      id: 3,
      img: 'https://picsum.photos/200/300',
    },
  ];
  getAll() {
    return this.meals;
  }
  constructor() { }
}
