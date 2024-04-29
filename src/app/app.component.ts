import { Component , ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapse : boolean = true
  title = 'metronicApp';
  // handleSidebarCollaps(event : any) {
  //   console.log(event)
  //   this.collapse = event
  // }
   ngOnchange() {
   }



}
