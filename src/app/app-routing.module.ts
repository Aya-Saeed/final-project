import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthGuard } from './shared/auth-guard/auth-guard';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent,
canActivate:[AuthGuard]},

  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:"aboutus",component:AboutUsComponent},
  {path:"ourteam",component:TeamPageComponent},
  {path:"signup",component:RegisterationComponent},
  {path:"signin",component:LoginComponent},
  {path:"favourite",component:FavouriteComponent},
  {path:"**",component:HomeComponent},


];
const routerOptions:ExtraOptions={
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled',
}
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
