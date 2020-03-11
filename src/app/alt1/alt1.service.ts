import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class Alt1Service {

  get core(): any {
	if (typeof(window.alt1) === 'undefined') {
		return {}; // Dummy service
	} else {
		return window.alt1;
	}
  }

  get lib(): any {

  }
  constructor() {}
}
