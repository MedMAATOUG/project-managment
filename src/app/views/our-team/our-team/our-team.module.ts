import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamRoutingModule } from './our-team-routing.module';
import { OurTeamComponent } from '../../our-team/our-team.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxButtonModule } from 'devextreme-angular';



@NgModule({
  declarations: [OurTeamComponent],
  imports: [
    CommonModule,
    OurTeamRoutingModule,

    FlexLayoutModule,
    DxButtonModule
  ]
})
export class OurTeamModule { }
