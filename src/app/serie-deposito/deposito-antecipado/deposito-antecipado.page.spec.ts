import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositoAntecipadoPage } from './deposito-antecipado.page';

describe('DepositoAntecipadoPage', () => {
  let component: DepositoAntecipadoPage;
  let fixture: ComponentFixture<DepositoAntecipadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoAntecipadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositoAntecipadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
