import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './main/app-header/app-header.component';
import { AppFooterComponent } from './main/app-footer/app-footer.component';
import { AppSidebarComponent, AppSidebarNavTitleComponent, AppSidebarNavDropdownComponent,
AppSidebarNavItemComponent, AppSidebarNavLinkComponent } from './main/app-sidebar/app-sidebar.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    DashboardComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavTitleComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavLinkComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
