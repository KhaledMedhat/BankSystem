import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundstransferComponent } from './fundstransfer.component';

describe('FundstransferComponent', () => {
  let component: FundstransferComponent;
  let fixture: ComponentFixture<FundstransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundstransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundstransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
