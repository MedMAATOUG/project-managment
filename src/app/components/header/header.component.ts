import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SidbarComponent } from '../sidbar/sidbar.component';
import { SidbarService } from 'src/app/services/sidbar.service';
import { Route, Router, Routes } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { SettingsService } from 'src/app/services/settings.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnChanges   {
  @Input() public isDarkMode !: boolean ; 
  // private isDArkMode : boolean = false;
  public formDAta: any[] = [
    {
      fieldName: 'FirstName',
      placeholder: 'enter first Name',
      showClearButton: true,
      mode: 'text',
    },
  ];
  public path!: any;
  public isPopupVisible: boolean = false;
  constructor(
    public sidbarService: SidbarService,
    private route: Router,
    public shared: SharedService ,
    private settings : SettingsService
  ) {
    this.path = route.url;
    // console.log(this.path);
  }

  public togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
  // private getMode():Observable<boolean> {
  //     return this.settings.getActiveMode().pipe(map(m=>this.isDArkMode = m));
  // }
  // -------------------------------------------popUp----------------------------------------------//

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isDarkMode']){
      console.log({current : changes['isDarkMode'].currentValue , 'prvious' : changes['isDarkMode'].previousValue});
    }
  }
}
