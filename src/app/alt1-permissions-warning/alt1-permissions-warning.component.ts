import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt1-permissions-warning',
  templateUrl: './alt1-permissions-warning.component.html',
  styleUrls: ['./alt1-permissions-warning.component.less']
})
export class Alt1PermissionsWarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (window.alt1) {
      if (window.alt1.permission
    }
  }

}
