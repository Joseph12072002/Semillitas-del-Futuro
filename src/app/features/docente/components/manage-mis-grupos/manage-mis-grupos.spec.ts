import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMisGrupos } from './manage-mis-grupos';

describe('ManageMisGrupos', () => {
  let component: ManageMisGrupos;
  let fixture: ComponentFixture<ManageMisGrupos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMisGrupos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMisGrupos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
