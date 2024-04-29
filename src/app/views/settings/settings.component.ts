import { Component, Output } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  isDarkMode: boolean = false;
  mode: string = '';
  constructor(private settingsService: SettingsService) {
    this.initializeMode()
    this.updateCurrentMode()

  }
  toggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateCurrentMode();
    this.settingsService.setActiveMode(this.isDarkMode);
  }
 
  private updateCurrentMode(): void {
    this.mode = this.isDarkMode ? 'moon' : 'sun';
  }



  private initializeMode(): void {
    this.settingsService.getActiveMode().subscribe((data: boolean) => {
      this.isDarkMode = data;
    });
  }
}
