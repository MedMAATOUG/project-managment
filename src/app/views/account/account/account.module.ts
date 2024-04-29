import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from '../account.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DxBulletModule, DxButtonModule, DxDataGridModule, DxProgressBarModule, DxTemplateModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
//----------------------------- devExtreme Modules//-----------------------------//
    DxButtonModule,
    DxProgressBarModule,  
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,

    FlexLayoutModule,
  ]
})
export class AccountModule { }
