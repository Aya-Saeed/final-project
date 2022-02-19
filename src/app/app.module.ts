import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { SliderComponent } from './home/slider/slider.component';
import { SpecialDishesComponent } from './home/special-dishes/special-dishes.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCategoriesComponent } from './menu/menu-categories/menu-categories.component';
import { MenuMealsComponent } from './menu/menu-categories/menu-meals/menu-meals.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReservationComponent } from './home/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent,
    CategoriesComponent,
    CategoryComponent,
    SliderComponent,
    SpecialDishesComponent,
    MenuComponent,
    MenuCategoriesComponent,
    MenuMealsComponent,
    AboutUsComponent,
    ReservationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
