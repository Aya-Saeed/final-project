import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  reserve:any="reserve";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  freg(reserve:string)
  {
    this.router.navigateByUrl('#'+reserve);
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
