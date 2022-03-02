import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/shared/model/meal';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MealService } from 'src/app/shared/service/meal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isAuthenticted = false;
  // array!:Array<Meal>;
  reserve: any = 'reserve';
  cartIsOpen = false;
  mealarray!: Array<Meal>;
  constructor(
    private router: Router,
    private mealservice: MealService,
    private authService: AuthService
  ) {}
  theAddedProduct: Meal[] = [];
  product!: Meal[];

  ngOnInit(): void {
    this.theAddedProduct = this.mealservice.cartArray;
    this.mealarray = this.mealservice.cartArray;
    console.log(this.mealarray);
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticted = !user ? false : true;
    });
  }
  delete(product: Meal) {
    this.theAddedProduct.splice(this.theAddedProduct.indexOf(product), 1);
  }
  freg(reserve: string) {
    this.router.navigateByUrl('#' + reserve);
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}

// # type script

// goto(fragement:string){
//     this.router.navigateByUrl('fragement#'+fragement);
//     console.log(fragement);
//   }

//  # router
// const routerOptions:ExtraOptions={
//   scrollPositionRestoration:'enabled',
//   anchorScrolling:'enabled',
// }
// @NgModule({
//   imports: [RouterModule.forRoot(routes,routerOptions)],
// //   exports: [RouterModule]
// })
