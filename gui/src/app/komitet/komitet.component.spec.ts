import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomitetComponent } from './komitet.component';

describe('KomitetComponent', () => {
  let component: KomitetComponent;
  let fixture: ComponentFixture<KomitetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomitetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomitetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
