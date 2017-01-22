import {Route} from '@angular/router';

export interface CustomRoute extends Route {
	label:string;
	title:string;
}