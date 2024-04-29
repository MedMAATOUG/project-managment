import { Component, HostListener , OnDestroy} from '@angular/core';
import { Observable, Subject, catchError, map, takeUntil } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { CorporateService } from 'src/app/services/corporate.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss'],
})
export class CorporateComponent   {
  public dataSource: any[] = [];
  public isDarkMode :boolean = false;
  public team!: Profile[];
  public width: any = 800;

  private $destroy : Subject<boolean> = new Subject();


  constructor(private corporateService: CorporateService, private settingService : SettingsService) {
    this.getMode().subscribe()
    this.getTeamData().subscribe();
    this.screenWidthHandle()
    this.checkWidth( this.width);
    
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();

    console.log("is destroyed");
  }
  private getMode():Observable<boolean> {
    return this.settingService.getActiveMode().pipe(
      takeUntil(this.$destroy),
      map(mode => this.isDarkMode = mode),
    );
  }
  private getTeamData() : Observable<Profile[]> {
   return  this.corporateService.getTeam().pipe(
      takeUntil(this.$destroy),
      map(team => this.team = team)
    )
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event) {
    this.screenWidthHandle()
    this.checkWidth( this.width);
  }

  private checkWidth(w:number) {
    if (w > 700) {
      this.getGalleryData(3);
    } else {
      this.getGalleryData(1);
    }
  }


  private getGalleryData(stepNumber: number) {
    let item: any[] = [];
    let step = 0;
    this.dataSource = [];
    while (step < this.team.length) {
      item = this.team.slice(step, stepNumber + step);
      if (stepNumber - item.length > 0) {
        for (let i = 0; i < stepNumber - item.length; i++) {
          item.push(this.team[i]);
        }
      }
      this.dataSource.push(item);
      item = [];
      step = step + stepNumber;
    }
  }

  private screenWidthHandle(){
    this.width = window.innerWidth
    // this.width = document.getElementById('gallery')?.getBoundingClientRect().width;

  }

 

}
