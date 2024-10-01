import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToastrMessageComponent } from './ngx-toastr-message.component';

describe('NgxToastrMessageComponent', () => {
  let component: NgxToastrMessageComponent;
  let fixture: ComponentFixture<NgxToastrMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxToastrMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxToastrMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
