import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjioComponent } from './ajio.component';

describe('AjioComponent', () => {
  let component: AjioComponent;
  let fixture: ComponentFixture<AjioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  