import {
  Component,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DxDrawerComponent } from 'devextreme-angular';
import { event } from 'devextreme/events';
import { SidbarItem } from 'src/app/models/sidbar-item';
import { SidbarService } from 'src/app/services/sidbar.service';
import { DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';
import { SettingsService } from 'src/app/services/settings.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss'],
})
export class SidbarComponent implements OnDestroy{

  @ViewChild(DxDrawerComponent, { static: false }) drawer!: DxDrawerComponent;
  @ViewChild(DxTreeViewComponent, { static: false }) treeViewInstance!: DxTreeViewComponent;

  private destroy$: Subject<string> = new Subject();
  public icon: string = 'chevronleft';
  public isDarkMode!: boolean;
  public isDrawerOpen = false;
  public logo: string = '../assets/images/BARTHAUER_software_tunisia_RGB.svg';
  public navigation!: SidbarItem[];
  public positionModes: string[] = ['left', 'right'];
  public selectedOpenMode = 'shrink';
  public selectedPosition = 'left';
  public selectedRevealMode = 'expand';
  public showModes: string[] = ['push', 'shrink', 'overlap'];
  public showSubmenuModes: string[] = ['slide', 'expand'];


  constructor(
    public sidbarService: SidbarService,
    private settings: SettingsService,
    private route: Router,
  ) {
    this._getMode().subscribe(()=>this.getLogoStatus());
    this.getIconStatus();
    this.navigation = this.sidbarService.navigation;
  }

  ngOnDestroy(): void {
    this.destroy$.next('destroy');
    this.destroy$.complete();
  }

  private getIconStatus(): void {
    this.isDrawerOpen == true
      ? (this.icon = 'chevrondoubleleft')
      : (this.icon = 'chevrondoubleright');
      this.getLogoStatus()
    
  }
  private getLogoStatus(): void {
    if(this.isDarkMode){
      this.isDrawerOpen? 
      this.logo = '../assets/images/BARTHAUER_dark_mode.svg'
      : this.logo = '../assets/images/BARTHAUER_dark_mode_icone.svg';
      
    }
    else {
      this.isDrawerOpen? 
      this.logo = '../assets/images/BARTHAUER_light_mode.svg'
      : this.logo = '../assets/images/BARTHAUER_light_mode_icone.svg';
    }

  }
  private getMode(): void {
    this.settings.getActiveMode().subscribe((mode: boolean) => {
      this.isDarkMode = mode;
      this.getLogoStatus()
      // console.log('active mode in sidbar : ', this.activeMode);
    });
  }

  private _getMode(): Observable<boolean> {
    return this.settings.getActiveMode().pipe(
      takeUntil(this.destroy$),
      map((mode) => (this.isDarkMode = mode))
    );
  }

  public toggleIconeButton(): void {
    // this.drawer.instance.toggle()
    this.isDrawerOpen = !this.isDrawerOpen;
    this.getIconStatus();
    console.log('oupps');
    this.treeViewInstance.instance.collapseAll();
  }
  public cheKSidBarExpended(): void {
    if (!this.isDrawerOpen) {
      this.isDrawerOpen = !this.isDrawerOpen;
      this.getIconStatus();
    }
  }

  public selectItem(event: any): void {
    console.log('event : ', event);
    this.route.navigate([event.itemData.path]);
    this.isDrawerOpen = false;
    this.getIconStatus();
    this.treeViewInstance.instance.collapseAll();
  }

  public eventHandler(event: any): void {
    console.log('eventhandler : ', event);
    this.treeViewInstance.instance.collapseAll();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    const screenWidth = event.target.innerWidth;
    if (screenWidth < 1000) {
      this.isDrawerOpen = false;
    }
    this.getIconStatus();
  }
}
