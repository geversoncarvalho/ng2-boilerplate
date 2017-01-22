import 'zone.js';
import 'reflect-metadata';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {AppRoutingModule} from './app.routing.module';

import {LeftMenuComponent} from "./layout/left-menu/left-menu.component";
import {PageHeaderComponent} from "./layout/page-header/page-header.component";
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
	imports: [BrowserModule, AppRoutingModule],
	declarations: [
		AppComponent, 
		LeftMenuComponent, 
		PageHeaderComponent,
		DashboardComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}