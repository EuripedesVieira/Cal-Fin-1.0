import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentoAntecipadoPage } from './pagamento-antecipado.page';

describe('PagamentoAntecipadoPage', () => {
  let component: PagamentoAntecipadoPage;
  let fixture: ComponentFixture<PagamentoAntecipadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoAntecipadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoAntecipadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
