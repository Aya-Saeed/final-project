
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common'
import { validateDate } from 'src/app/shared/service/validation';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit,OnDestroy {
  isAuthenticted = false;
  private userSub!: Subscription;
  current:string=formatDate(new Date(),'yyyy-MM-dd', 'en');
  auth: boolean = true;
   time = new Date();
 
  book = this.fb.group({
    date: ['', [Validators.required]],
    start_time: ['', [Validators.required]],
    end_time: ['', [Validators.required]],
    person:['',[Validators.required]],

  },{Validators:[validateDate]}
  )
  constructor(private fb: FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    console.log(formatDate(new Date(), 'MM/dd/yyyy', 'en'));
    // console.log( this.time.toLocaleString('en-US', { hour: 'numeric', hour12: true }));
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticted = !user ? false : true;
    });
    
  }
 
  onSubmit(reservation: any) {
    console.log(reservation.value);
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
// import {formatDate} from '@angular/common';
// formatDate(new Date(), 'yyyy/MM/dd', 'en');