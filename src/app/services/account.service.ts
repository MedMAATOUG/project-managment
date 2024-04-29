import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  profile! : Profile 

  data : any[]= [
    {
      boxName : 'Earnings',
      currentValue : 4.5 ,
      lastValue : 3, 
      unity : 'currency'
    } ,

    {
      boxName : 'Projects',
      currentValue : 75 ,
      lastValue : 80, 
      unity : null
      
    } ,

    {
      boxName : 'Success Rate',
      currentValue : 0.6 ,
      lastValue : 0.5, 
      unity : 'percent'
    } ,



  ] 
  order : any[] =  [
    {
      location : 'USA',
      status : 'OK' ,
      device : 'Chrome - Windows' ,
      ip : '236.125.56.78' , 
      time : '2 mins ago' ,
    },
    {
      location : 'USA',
      status : 'ERR' ,
      device : 'Chrome - Windows' ,
      ip : '236.125.56.78' , 
      time : '20 mins ago' ,
    },
    {
      location : 'United Kingdom',
      status : 'ERR' ,
      device : 'Chrome - Windows' ,
      ip : '236.125.56.78' , 
      time : '20 mins ago' ,
    } ,

    {
      location : 'Norway(-)',
      status : 'ERR' ,
      device : 'Firefox - Windows' ,
      ip : '236.125.56.10' , 
      time : '40 mins ago' ,
    } ,
   ];
  constructor() { }
  getProfile(){
    this.profile = {
      firstName : 'Maatoug' ,
      lastName : 'Mohamed',
      email : 'maatougmouhammed@gmailcom',
      age : 28 ,
      phone : 29272307 ,
      country :'Tunisia' ,
      adress : 'sousse',
      company : 'BS Tunisia',
      companySite  : 'Bstunisia.com' ,
      job : 'angular devlopper' ,
  }

  }
}
