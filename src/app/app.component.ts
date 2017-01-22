import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import './app.less';

@Component({
    selector: 'app',
    templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
    constructor(private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        console.log('--->>>', this.route);
    }
 }