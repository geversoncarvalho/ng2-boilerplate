import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {appRoutes} from '../../app.routing.module';
import './left-menu.less';

@Component({
	selector: 'left-menu',
	templateUrl: 'left-menu.html'
})
export class LeftMenuComponent {

	protected routes = appRoutes;

	constructor(private router:Router) {
		console.log('--->>', appRoutes);
	}
}