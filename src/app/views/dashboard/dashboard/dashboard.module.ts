import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxButtonModule, DxChartModule, DxDropDownButtonModule, DxGalleryModule, DxLinearGaugeModule, DxPieChartModule, DxProgressBarModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,

    DxDropDownButtonModule,
    DxGalleryModule,
    DxPieChartModule,
    DxButtonModule,
    DxChartModule,
    DxProgressBarModule 
    

  ]
})
export class DashboardModule { }
