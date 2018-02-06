import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { enableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';

const appRoutes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },
    { path: 'map', component: MapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}