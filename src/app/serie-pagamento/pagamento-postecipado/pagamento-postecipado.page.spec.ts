import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentoPostecipadoPage } from './pagamento-postecipado.page';

describe('PagamentoPostecipadoPage', () => {
  let component: PagamentoPostecipadoPage;
  let fixture: ComponentFixture<PagamentoPostecipadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoPostecipadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoPostecipadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
