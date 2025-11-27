import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMisAlumnos } from './manage-mis-alumnos';

describe('ManageMisAlumnos', () => {
  let component: ManageMisAlumnos;
  let fixture: ComponentFixture<ManageMisAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMisAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMisAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
