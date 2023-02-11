import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaucerComponent } from './vaucer.component';

describe('VaucerComponent', () => {
  let component: VaucerComponent;
  let fixture: ComponentFixture<VaucerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaucerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaucerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
