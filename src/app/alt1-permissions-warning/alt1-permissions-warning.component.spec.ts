import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alt1PermissionsWarningComponent } from './alt1-permissions-warning.component';

describe('Alt1PermissionsWarningComponent', () => {
  let component: Alt1PermissionsWarningComponent;
  let fixture: ComponentFixture<Alt1PermissionsWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alt1PermissionsWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alt1PermissionsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
