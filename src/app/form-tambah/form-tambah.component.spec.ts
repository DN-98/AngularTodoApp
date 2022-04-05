import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTambahComponent } from './form-tambah.component';

describe('FormTambahComponent', () => {
  let component: FormTambahComponent;
  let fixture: ComponentFixture<FormTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTambahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
