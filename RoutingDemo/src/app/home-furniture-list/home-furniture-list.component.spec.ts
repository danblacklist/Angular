import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFurnitureListComponent } from './home-furniture-list.component';

describe('HomeFurnitureListComponent', () => {
  let component: HomeFurnitureListComponent;
  let fixture: ComponentFixture<HomeFurnitureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFurnitureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFurnitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
