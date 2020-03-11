import { Component, OnInit } from '@angular/core';
import * as a1lib from '@alt1/base';

@Component({
	selector: 'app-alt1-permissions-warning',
	templateUrl: './alt1-permissions-warning.component.html',
	styleUrls: ['./alt1-permissions-warning.component.less']
})
export class Alt1PermissionsWarningComponent implements OnInit {

	public alt1: any;
	constructor() { }

	ngOnInit(): void {
		if (window.alt1) {
			this.alt1 = window.alt1;
		}
	}
}
