import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueChunkComponent } from './dialogue-chunk.component';

describe('DialogueChunkComponent', () => {
  let component: DialogueChunkComponent;
  let fixture: ComponentFixture<DialogueChunkComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ DialogueChunkComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(DialogueChunkComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
