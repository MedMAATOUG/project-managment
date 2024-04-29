import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { CorporateComponent } from '../corporate.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxGalleryModule, DxTemplateModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    CorporateComponent,
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule, 

    FlexLayoutModule,
    DxGalleryModule,
    DxTemplateModule
  ]
})
export class CorporateModule { }
