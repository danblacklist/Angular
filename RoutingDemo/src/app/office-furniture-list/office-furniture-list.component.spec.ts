import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeFurnitureListComponent } from './office-furniture-list.component';

describe('OfficeFurnitureListComponent', () => {
  let component: OfficeFurnitureListComponent;
  let fixture: ComponentFixture<OfficeFurnitureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeFurnitureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeFurnitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
