import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class CorporateService {
  private team:Profile[] = [
    {
      image: 'url(../../../assets/images/300-1.jpg)',
      firstName: 'Paul ',
      lastName: 'Miles',
      job: 'Developer',
    },
    {
      image: 'url(../../../assets/images/300-2.jpg)',
      firstName: 'Jania',
      lastName: 'Garnbet',
      job: 'Creative Director',
    },
    {
      image: 'url(../../../assets/images/300-3.jpg)',
      firstName: 'James',
      lastName: 'Nilson',
      job: 'Python Expert',
    },
   
    {
      image: 'url(../../../assets/images/300-4.jpg)',
      firstName: 'Mia',
      lastName: 'Miles',
      job: 'Project Manager',
    },
    {
      image: 'url(../../../assets/images/300-5.jpg)',
      firstName: 'Sophia',
      lastName: 'Miles',
      job: 'Art Director',
    },
    {
      image: 'url(../../../assets/images/300-6.jpg)',
      firstName: 'Oliver',
      lastName: 'Lucas',
      job: 'Marketing Manager',
    },
    {
      image: 'url(../../../assets/images/300-7.jpg)',
      firstName: 'Amelia',
      lastName: 'Miles',
      job: 'QA Managers',
    },
    {
      image: 'url(../../../assets/images/300-8.jpg)',
      firstName: 'Liam',
      lastName: 'James',
      job: 'QA Managers',
    }
  ];
   

  constructor() {
   
  }

  public getTeam():Observable<Profile[]>{
    return of(this.team)
  }
 
}
