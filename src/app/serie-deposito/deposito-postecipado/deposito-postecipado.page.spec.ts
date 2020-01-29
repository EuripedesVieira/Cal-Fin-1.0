import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositoPostecipadoPage } from './deposito-postecipado.page';

describe('DepositoPostecipadoPage', () => {
  let component: DepositoPostecipadoPage;
  let fixture: ComponentFixture<DepositoPostecipadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoPostecipadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositoPostecipadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
