import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontanteSimplesPage } from './montante-simples.page';

describe('MontanteSimplesPage', () => {
  let component: MontanteSimplesPage;
  let fixture: ComponentFixture<MontanteSimplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontanteSimplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontanteSimplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
