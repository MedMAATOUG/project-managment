import { Component } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { CorporateService } from 'src/app/services/corporate.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent {
  private $destroy: Subject<boolean> = new Subject();
  public team: Profile[] = [];
  public isDarkMode: boolean = false;
  public items = ['item' , 'item' ,'item' ,'item' ,'item' ,'item' ,'item' ,'item' ]
  constructor(
    private corporateService: CorporateService,
    private settingService: SettingsService
  ) {
    this.getMode().subscribe();
    this.getTeam().subscribe();
    console.log('team : ', this.team);
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
  private getTeam(): Observable<Profile[]> {
    return this.corporateService.getTeam().pipe(
      takeUntil(this.$destroy),
      map((team) => (this.team = team))
    );
  }
  private getMode(): Observable<boolean> {
    return this.settingService.getActiveMode().pipe(
      takeUntil(this.$destroy),
      map((mode) => (this.isDarkMode = mode))
    );
  }
}
