import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliancedigitalComponent } from './reliancedigital.component';

describe('ReliancedigitalComponent', () => {
  let component: ReliancedigitalComponent;
  let fixture: ComponentFixture<ReliancedigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliancedigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliancedigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
