import { AbstractControl, ValidationErrors } from "@angular/forms";
import { formatDate } from '@angular/common'
export function validateDate(controls:AbstractControl){
 const date=controls.get('date')!.value;
 const currentDate=formatDate(new Date(), 'MM/dd/yyyy', 'en')
 return date<currentDate ? {incorrect:true }:null;
 
}