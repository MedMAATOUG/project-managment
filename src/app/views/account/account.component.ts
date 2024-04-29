import { Component } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { AccountService } from 'src/app/services/account.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  private $destroy : Subject<void> = new Subject<void>();
  public isDarkMode : boolean = false;
  private collapsed = false;
  public data!: any[];
  public logs!: any[];
  public profile!: Profile;
  constructor(private accountService: AccountService , private settingService : SettingsService) {
    this.getData();
    this.getLog();
    this.getMode().subscribe();
    this.getProfile();
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }


  private getProfile() {
    this.accountService.getProfile();
    this.profile = this.accountService.profile;
  }

  private getData() {
    this.data = this.accountService.data;
  }

  private getLog() {
    this.logs = this.accountService.order;
  }

  private getMode():Observable<boolean> {
    return this.settingService.getActiveMode().pipe(takeUntil(this.$destroy) , map(m=>this.isDarkMode = m));
  }

  // public customizeColumns(columns : any) {
  //   columns[0].cellTemplate = (cellElement : any, cellInfo: any) => {
  //     cellElement.nativeElement.style.backgroundColor = 'lightblue';
  //   };
  // }

  public format(ratio: any) {
    return `Profile completation: ${ratio * 100}%`;
  }

  // grid function -----------------
  /**
   * Event handler for when the content is ready.
   * @param {any} e - The event object.
   * @returns None
   */
  public contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  /**
   * Customize the tooltip for a data point in a chart.
   * @param {any} pointsInfo - Information about the data point.
   * @returns An object with a "text" property that represents the customized tooltip text.
   */
  public customizeTooltip = (pointsInfo: any) => ({
    text: `${parseInt(pointsInfo.originalValue)}%`,
  });
}
