import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFurnitureDetailsComponent } from './home-furniture-details.component';

describe('HomeFurnitureDetailsComponent', () => {
  let component: HomeFurnitureDetailsComponent;
  let fixture: ComponentFixture<HomeFurnitureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFurnitureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFurnitureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
