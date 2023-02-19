import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaucerForProductComponent } from './vaucer-for-product.component';

describe('VaucerForProductComponent', () => {
  let component: VaucerForProductComponent;
  let fixture: ComponentFixture<VaucerForProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaucerForProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaucerForProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
