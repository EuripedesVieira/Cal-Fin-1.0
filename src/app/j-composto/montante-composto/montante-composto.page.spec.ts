import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontanteCompostoPage } from './montante-composto.page';

describe('MontanteCompostoPage', () => {
  let component: MontanteCompostoPage;
  let fixture: ComponentFixture<MontanteCompostoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontanteCompostoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontanteCompostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
