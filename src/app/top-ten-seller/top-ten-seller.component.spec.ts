import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenSellerComponent } from './top-ten-seller.component';

describe('TopTenSellerComponent', () => {
  let component: TopTenSellerComponent;
  let fixture: ComponentFixture<TopTenSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
