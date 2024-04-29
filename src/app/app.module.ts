import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// components:
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ----------------MAterials-----------------------
import { MatSidenavModule } from '@angular/material/sidenav';

// devExtreme :
import { DevExtremeModule, DxTreeViewModule } from 'devextreme-angular'; // Import DevExtremeModule
import { DxButtonModule } from 'devextreme-angular';
import { DxDrawerModule } from 'devextreme-angular';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SettingsComponent } from './views/settings/settings.component';
import { CorporateComponent } from './views/corporate/corporate.component';
import { SocialComponent } from './views/social/social.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DxDataGridModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    // app layouts components : -------------------------------------------
    HeaderComponent,
    FooterComponent,
    SidbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    // Matrials Modules :
    MatSidenavModule,

    // devExtreme Modules :
    DevExtremeModule,
    DxButtonModule,
    DxDrawerModule,
    DxDataGridModule,
    DxTreeViewModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
