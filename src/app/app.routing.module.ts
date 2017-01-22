import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomRoute} from './helpers/CustomRoutes';

import {DashboardComponent} from './dashboard/dashboard.component';

export const appRoutes:CustomRoute[] = [
	{
		path: '', 
		component: DashboardComponent,
		label: 'Dashboard',
		title: 'Dashboard Screen'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}