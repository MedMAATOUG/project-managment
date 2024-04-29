import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private  $activeModeSubject  = new BehaviorSubject<boolean>(false); 
  constructor() { 
  }
  public getActiveMode(): Observable<boolean> {
    return this.$activeModeSubject.asObservable();
  }

  public setActiveMode(mode : boolean):void {
    this.$activeModeSubject.next(mode);
  }
}
