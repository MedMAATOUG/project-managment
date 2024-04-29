import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private route : Router) { }

  //------------------------------//shared methodes------------------------------//
  navigate(path : string){
      this.route.navigate([path])
  }
}
